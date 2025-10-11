const HowToUseSection = () => {
  return (
    <section
      id="how-to-use"
      className="pt-24 pb-16 bg-gradient-to-br from-memesense-100 to-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            How to Use MemeSenseX
          </h3>
          <p className="text-gray-600 text-lg">
            Get started with our comprehensive guide and requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Steps */}
          <div className="gradient-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] border border-memesense-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 bg-gradient-to-br from-memesense-700 to-memesense-900 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">Steps to Follow</h4>
            </div>
            <p className="text-gray-600 mb-6 text-base">Follow these simple steps to analyze your memes with AI-powered content detection</p>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-memesense-700 to-memesense-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2 text-base">Upload Your Meme</h5>
                  <p className="text-sm text-gray-600">
                    Click "Choose File" or drag and drop your meme image. Accepts JPG and PNG formats.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-700 to-purple-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2 text-base">Click "Classify Meme"</h5>
                  <p className="text-sm text-gray-600">
                    Our AI models will analyze both visual content and text in your meme.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-700 to-purple-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2 text-base">Review the Results</h5>
                  <p className="text-sm text-gray-600">
                    View classification results showing if content is suggestive or safe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Important Guidelines */}
          <div className="gradient-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] border border-memesense-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 bg-gradient-to-br from-memesense-700 to-memesense-900 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800">Important Guidelines</h4>
            </div>
            <p className="text-gray-600 mb-6 text-base">To ensure accurate analysis, please follow these requirements:</p>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-700 to-purple-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2 text-base">Meme Must Contain Text</h5>
                  <p className="text-sm text-gray-600">
                    Input should be a meme with text. Pure images won't be accepted due to multimodal nature.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2 text-base">Minimum Text Requirements</h5>
                  <p className="text-sm text-gray-600">
                    Meme should have at least three meaningful, non-gibberish words for context.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-700 to-purple-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2 text-base">Image Quality</h5>
                  <p className="text-sm text-gray-600">
                    Use clear, non-blurry images for better OCR text extraction accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;