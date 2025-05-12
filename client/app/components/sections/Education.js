import React from "react";

export default function Education() {
  return (
    <section
      className="bg-gradient-to-br from-indigo-950/50 via-purple-900/30 to-violet-950/50 text-white py-10 sm:py-12 md:py-16 lg:py-20"
      aria-label="Education Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with decorative elements */}
        <div className="relative mb-8 sm:mb-10 lg:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-400 hover:text-indigo-300 transition-colors">
            My Education
          </h2>
          {/* Decorative circles */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-pink-500/10 to-indigo-500/10 blur-xl -top-8 -right-8 sm:-top-10 sm:-right-10 animate-pulse"></div>
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl -bottom-6 -left-8 sm:-bottom-8 sm:-left-10 animate-pulse"></div>
        </div>

        {/* Education Content */}
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
          <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-800/40 rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
              <div className="bg-indigo-800/20 border border-indigo-700/40 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300">
                <h5 className="text-sm sm:text-base md:text-lg font-medium text-white">
                  Software Engineering
                </h5>
                <p className="text-xs sm:text-sm md:text-base text-indigo-200">
                  Moringa School
                </p>
                <p className="text-xs sm:text-sm md:text-base text-indigo-300">
                  September 2, 2024 – March 7, 2025
                </p>
              </div>
              <div className="bg-indigo-800/20 border border-indigo-700/40 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300">
                <h5 className="text-sm sm:text-base md:text-lg font-medium text-white">
                  Bachelor’s in Business Information Technology
                </h5>
                <p className="text-xs sm:text-sm md:text-base text-indigo-200">
                  Kabarak University
                </p>
                <p className="text-xs sm:text-sm md:text-base text-indigo-300">
                  2018 – 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}