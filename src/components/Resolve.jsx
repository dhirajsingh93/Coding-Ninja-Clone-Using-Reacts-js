import React from "react";

const Features = () => {
  return (
    <div className="bg-black text-white px-6 py-30 relative">

      {/* Full vertical line */}
      <div className="absolute left-52 top-0 h-full border-l-2  border-yellow-600"></div>

      {/* Step 1 */}
      <div className="relative flex items-start ml-61 pb-10">
        {/* Icon */}
        <div className="absolute -left-20 top-0 bg-white text-black rounded-lg px-3 py-2 text-lg font-bold">
          ❤️
        </div>

        {/* Content */}
        <div className="ml-8">
          <h3 className="text-xl font-bold -ml-12 mt-1 text-white mb-8">
            Always available when you get stuck
          </h3>
          <p className="text-5xl font-semibold mb-4 text-gray-400">
            Resolve doubts any time through chat, <br /> voice notes or calling.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="relative flex items-start ml-62 pb-10">
        <div className="ml-6">
          <p className="text-5xl font-semibold mb-2 text-gray-400">
            500+ dedicated Teaching Assistants to <br /> resolve your doubts quickly
          </p>
          <p className="text-5xl font-semibold mt-22 text-gray-400">
            5/5 rating for 90% doubt resolutions
          </p>
        </div>
      </div>

    </div>
  );
};

export default Features;
