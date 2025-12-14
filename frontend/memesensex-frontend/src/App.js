import "./App.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Client } from "@gradio/client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowToUseSection from "./components/HowToUseSection";
import ToolSection from "./components/ToolSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [inputKey, setInputKey] = useState(Date.now());
  const [isDragOver, setIsDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [results, setResults] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageFile(e.target.files[0]);
    }
  };

  const handleClear = () => {
    setImage(null);
    setImageFile(null);
    setInputKey(Date.now());
    setResults(null);
    setIsLoading(false);
    setCurrentStage(0);
  };

  const handleClassify = async () => {
    if (!imageFile) return;
    setIsLoading(true);
    setResults(null);
    setCurrentStage(0);

    const stages = [
      { name: "Visual Analysis", duration: 2000 },
      { name: "Text Processing", duration: 1500 },
      { name: "Classification", duration: 1000 },
    ];

    for (let i = 0; i < stages.length; i++) {
      setCurrentStage(i);
      await new Promise((resolve) => setTimeout(resolve, stages[i].duration));
    }

    try {
      // Use Gradio Client for proper image serialization
      const client = await Client.connect("https://daneigh-msx-backend.hf.space/");
      
      // Use the default endpoint (fn_index 0) which is the first function in Gradio
      const result = await client.predict(0, [imageFile]);
      
      // ADD DEBUG LOGGING
      console.log("Raw API result:", result);
      console.log("Result data:", result.data);
      
      // Parse the result from API
      const predictionText = result.data; // Gradio client returns data directly
      console.log("Prediction text:", predictionText);
      
      // Extract classification and confidence from the text response
      const isExplicit = predictionText.toLowerCase().includes('sexual') && 
                        !predictionText.toLowerCase().includes('non-sexual');
      
      // Extract confidence percentage from text like "Confidence: 100.0%"
      const confidenceMatch = predictionText.match(/Confidence:\s*(\d+(?:\.\d+)?)/);
      const confidence = confidenceMatch ? parseFloat(confidenceMatch[1]) : 50; // Default to 50% if not found
      
      console.log("Extracted confidence:", confidence);
      
      // Convert confidence to probability format
      const probabilities = isExplicit 
        ? [1 - confidence/100, confidence/100]  // [non-sexual prob, sexual prob]
        : [confidence/100, 1 - confidence/100]; // [non-sexual prob, sexual prob]
      
      const classificationResult = {
        classification: isExplicit ? "Explicit Content" : "Safe Content",
        details: {
          overall: isExplicit ? "explicit" : "safe",
          raw_text: predictionText,
          clean_text: predictionText,
          probabilities: [probabilities], // Use real probabilities from model
        },
      };

      setResults(classificationResult);
    } catch (error) {
      console.error(error);
      if (error.message) {
        toast.error("Error: " + error.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        setImage(null);
        setImageFile(null);
        setInputKey(Date.now());
        setResults(null);
        setIsLoading(false);
        setCurrentStage(0);
        return;
      }
    }

    setIsLoading(false);
    setCurrentStage(0);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files[0] && files[0].type.startsWith("image/")) {
      setImage(URL.createObjectURL(files[0]));
      setImageFile(files[0]);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <HowToUseSection />
      <ToolSection
        image={image}
        imageFile={imageFile}
        inputKey={inputKey}
        isDragOver={isDragOver}
        isLoading={isLoading}
        currentStage={currentStage}
        results={results}
        handleImageChange={handleImageChange}
        handleClear={handleClear}
        handleClassify={handleClassify}
        handleDragOver={handleDragOver}
        handleDragLeave={handleDragLeave}
        handleDrop={handleDrop}
      />
      <AboutSection />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
