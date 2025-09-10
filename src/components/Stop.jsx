import React from "react";
import { Users } from "lucide-react"; // Icon import

import fram from '../assets/fram.svg'

const event = {
  id: 1,
  img: fram,
  title: "Unlock learning, career opportunities & success from X to 10X",
  tags: ["Industry Expert Session", "Fireside Chat", "Tech Talk"],
};

const SingleCard = () => {
  return (
    <section className="max-w-8xl py-16 flex justify-start px-45">
      {/* ==== Left Timeline ==== */}
      <div className="relative flex flex-col items-center mr-8">
        {/* Vertical Line */}
        <div className="absolute top-12 bottom-0 w-[2px] h-360 bg-orange-500"></div>

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-md shadow-md z-10">
          <Users size={24} />
        </div>
      </div>

      {/* ==== Right Content ==== */}
      <div className="flex-1 ml-2 mt-3">
        <p className="text-gray-900 mb-6 font-semibold text-2xl">
          Personalised guidance to prepare you for your interview needs
        </p>

        {/* Event Card */}
        <div className="w-[540px] h-70 bg-[#f9f6f2] rounded-2xl shadow-md p-6">
          <img src={event.img} alt="event" className="mb-2 w-28 h-28" />
          <p className="text-lg font-bold  mb-6">{event.title}</p>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white text-amber-600  px-3 py-1 rounded-lg text-medium font-semibold "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
