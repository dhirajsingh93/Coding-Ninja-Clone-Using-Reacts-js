import React from "react";
import { Users, Briefcase, FileText } from "lucide-react";


import mock from '../assets/mock-interview.webp'


import pro from '../assets/profile-review.webp'


import test from '../assets/proj.webp'

const Mentorship = () => {
  return (
    <section className="bg-white py-16 px-6 flex justify-center font-sans">
      <div className="max-w-6xl w-full flex">
        
        {/* ==== Left Timeline ==== */}
        <div className="relative flex flex-col items-center mr-8">
          {/* Vertical Line */}
          <div className="absolute top-12 bottom-0 w-[1.5px] h-130 bg-orange-500"></div>

          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-md shadow-md z-10">
            <Users size={24} />
          </div>
        </div>

        {/* ==== Right Content ==== */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900">
            1:1 Mentorship sessions
          </h2>
          <p className="text-gray-500 mb-10">
            Personalised guidance to prepare you for your interview needs
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow p-6 border">
              <img
                src={mock}
                alt="Mock Interview"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Mock interview
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Nail coding assessments and technical challenges
              </p>
              <p className="text-gray-600 text-sm">
                Gain insights into problem-solving and algorithmic thinking
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow p-6 border">
              <img
                src={pro}
                alt="Profile Review"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Profile review
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Get your profile & resume reviewed by industry leaders
              </p>
              <p className="text-gray-600 text-sm">
                Focus on different aspects of your job search
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow p-6 border">
              <img
                src={test}
                alt="Project Guidance"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Project guidance
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Career counselling with industry experts
              </p>
              <p className="text-gray-600 text-sm">
                Get assistance on how to build real-time projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
