const AboutSection = () => {
  return (
    <section id="about" className="pt-28 pb-16 bg-gradient-to-br from-white to-memesense-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* The Stack Behind MemeSenseX */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
            The Stack Behind MemeSenseX
          </h3>
          <p className="text-center text-gray-600 mb-12">
            Compact, powerful, and tuned for Filipino internet culture. Here's
            how each piece contributes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ResNet-18 */}
            <div className="bg-white border-2 border-transparent bg-gradient-to-br from-purple-800 to-purple-900 bg-clip-border rounded-2xl p-0.5 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-purple-900">
                  ResNet-18
                </h4>
                <p className="text-gray-700 mb-4">
                  A lightweight residual CNN that learns deeper visual
                  patterns without degradation—effective for detecting
                  suggestive cues in images.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Residual connections</li>
                  <li>• Lightweight CNN</li>
                  <li>• Robust visual features</li>
                  <li>• Efficient inference</li>
                </ul>
              </div>
            </div>

            {/* Tagalog BERT */}
            <div className="bg-white border-2 border-transparent bg-gradient-to-br from-purple-800 to-purple-900 bg-clip-border rounded-2xl p-0.5 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-purple-900">
                  Tagalog BERT
                </h4>
                <p className="text-gray-700 mb-4">
                  BERT trained on large-scale Tagalog data to understand
                  slang, code-mixing, and local expressions common in Filipino
                  memes.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Tagalog-tuned</li>
                  <li>• Contextual text</li>
                  <li>• Code-mix ready</li>
                </ul>
              </div>
            </div>

            {/* Urban Dictionary */}
            <div className="bg-white border-2 border-transparent bg-gradient-to-br from-purple-800 to-purple-900 bg-clip-border rounded-2xl p-0.5 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-purple-900">
                  Urban Dictionary
                </h4>
                <p className="text-gray-700 mb-4">
                  Urban Dictionary as a resource to capture slang to help
                  bridge gaps in context and makes the model aware of nuances
                  in informal online language.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Slang aware</li>
                  <li>• Context enrichment</li>
                  <li>• Nuance capture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;