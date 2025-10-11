import logo from "../asset/logo.svg";

const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-purple-800 via-purple-900 to-violet-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Logo with Animated Emojis */}
          <div className="flex justify-center lg:justify-start relative">
            <div className="relative">
              <img
                src={logo}
                alt="MemeSenseX logo"
                className="w-80 h-80 md:w-96 md:h-96 object-contain z-0 relative"
              />
              {/* Animated Emoji Placeholders */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { emoji: "👌", pos: "-top-8 left-8", size: "text-3xl", delay: "0s" },
                  { emoji: "👈", pos: "top-15 -right-12", size: "text-5xl", delay: "1s" },
                  { emoji: "👅", pos: "-bottom-8 -left-12", size: "text-4xl", delay: "2s" },
                  { emoji: "🍆", pos: "bottom-4 -right-8", size: "text-5xl", delay: "0.5s" },
                  { emoji: "🍑", pos: "top-1/2 -left-16", size: "text-6xl", delay: "1.5s" },
                  { emoji: "💦", pos: "top-1/4 -right-20", size: "text-3xl", delay: "2.5s" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`absolute ${item.pos} ${item.size} animate-bounce z-20`}
                    style={{ animationDelay: item.delay, animationDuration: "3s" }}
                  >
                    {item.emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Title, Text and Button */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                MemeSenseX
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                MemeSenseX is an AI-driven system built to detect sexually
                suggestive content in Tagalog memes. By combining advanced
                image recognition (ResNet-18) with natural language processing
                (Tagalog-BERT), it analyzes both visuals and text to capture
                the full meaning behind memes.
              </p>
            </div>

            <button
              onClick={() => scrollToSection("how-to-use")}
              className="bg-white text-memesense-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              How to Use →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;