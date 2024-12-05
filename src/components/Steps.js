'use client';

import React from 'react';

const ProcessSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl text-center flex flex-col justify-around mx-14">
        <h2 className="text-3xl font-semibold mb-12 text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text animate-gradientFlow inline-block">A simple 3-Step Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:shadow-bcdBlue/40 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Step 1</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperdiet
              sed id elementum. Quam vel aliquam sit vulputate.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:shadow-bcdBlue/40 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Step 2</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperdiet
              sed id elementum. Quam vel aliquam sit vulputate.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:shadow-bcdBlue/40 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Step 3</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperdiet
              sed id elementum. Quam vel aliquam sit vulputate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
