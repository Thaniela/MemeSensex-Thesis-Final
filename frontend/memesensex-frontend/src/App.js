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
      // Connect to the Gradio client
      const client = await Client.connect("daneigh/memesensex-backend");
      
      // Make prediction using Gradio client
      const result = await client.predict("/predict", {
        image: imageFile
      });

      // Parse the result from Gradio
      const predictionText = result.data[0]; // Gradio returns data as array
      
      // Extract classification from the text response
      const isExplicit = predictionText.toLowerCase().includes('sexual') || 
                        predictionText.toLowerCase().includes('explicit');
      
      const classificationResult = {
        classification: isExplicit ? "Explicit Content" : "Safe Content",
        details: {
          overall: isExplicit ? "explicit" : "safe",
          raw_text: predictionText,
          clean_text: predictionText,
          probabilities: [isExplicit ? [0.1, 0.9] : [0.9, 0.1]], // Mock probabilities based on result
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
