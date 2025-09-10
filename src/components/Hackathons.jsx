import React from "react";
import { Flame, Handshake } from "lucide-react"; // Example icons

import hacka from '../assets/hacka.webp'


const Hackathons = () => {
  return (
    <section className="w-full flex justify-start py-16 px-65">
      <div className="w-[480px]">
        {/* ==== Top Big Card ==== */}
        <div className="bg-white rounded-2xl shadow-lg p-1 mb-6">
          <div className="relative">
            <img
              src={hacka}
              alt="Hackathon"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            {/* Tag Label */}
            <span className="absolute top-3 left-3 bg-white text-orange-600 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow">
              <Flame size={16} /> Hackathons
            </span>
          </div>
        </div>

        {/* ==== Bottom Two Cards ==== */}
        <div className="grid grid-cols-2 gap-4 ">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-2xl  h-30 shadow-md p-4 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold ">
              Hands on workshops
            </h3>
            <p className="text-medium text-gray-600 mb-4">
              Learn latest tools, make open source contributions and more!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-2xl shadow-md p-4 hover:shadow-lg transition">
            <h3 className="text-base font-semibold mb-1 flex items-center gap-1">
              <Handshake size={16} className="text-purple-600" />
              Partner events
            </h3>
            <p className="text-sm text-gray-600">
              With clubs from IITs, IIMs and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
