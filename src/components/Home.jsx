import React from "react";
import arrow from '../assets/arrow.svg'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-2">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-0 py-16">
        
        {/* Left Panel */}
        <div className="flex-1 flex flex-col justify-center -mt-35">
          <p className="text-green-500 font-semibold mb-4 text-xl">
            Restricted by opportunities?
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Get the tech career you deserve. Faster.
          </h1>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 bg-[#111111] rounded-lg px-6 py-4 border border-gray-800">
              <img src={arrow} alt="verified" className="w-5 h-5" />
              <span className="text-white">
                <span className="font-bold">128% average hike</span> via our placement cell
              </span>
            </li>
            <li className="flex items-center gap-4 bg-[#111111] rounded-lg px-6 py-4 border border-gray-800">
              <img src={arrow} alt="verified" className="w-5 h-5" />
              <span className="text-white">
                <span className="font-bold">1.5 Lac+ learners</span> cracked top tech companies
              </span>
            </li>
            <li className="flex items-center gap-4 bg-[#111111] rounded-lg px-6 py-4 border border-gray-800">
              <img src={arrow} alt="verified" className="w-5 h-5" />
              <span className="text-white">
                <span className="font-bold">1,400+ alumni in MAANG</span> &amp; 103 unicorn startups
              </span>
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="flex-1 flex justify-center">
          <form className="bg-white rounded-2xl shadow-lg p-6 w-full text-black max-w-md border-3 border-yellow-400 relative">
            {/* Yellow glow effect */}

            {
              /* black also effects */
            }

            <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_#facc15] pointer-events-none opacity-70"></div>

            <h2 className="text-black text-xl font-semibold mb-6">
              Let's find the right course for you
            </h2>
            
            {/* Experience */}
            <div className="flex flex-col gap-3 mb-4">
              <label className="text-black font-medium mb-1">Experience</label>
              <div className="flex flex-col gap-2 text-black">
                {[
                  "Working Professional - Technical Roles",
                  "Working Professional - Non Technical",
                  "College Student - Final Year",
                  "College Student - 1st to Pre-final Year",
                  "Others"
                ].map((option, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input type="radio" name="exp" className="accent-black" defaultChecked={index === 1} />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Topic Select */}
            <div className="mb-4 relative">
              <label className="text-black font-medium mb-1 block">
                Select topic of interest
              </label>
              <select className="w-full rounded-md border border-gray-300 bg-white text-gray-700 px-3 py-2 focus:outline-none appearance-none pr-10">
                <option value="">Select your options/choices</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="data">Data Analysis</option>
              
              </select>
              <span className="pointer-events-none absolute right-3 top-[70%] transform -translate-y-1/2 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5 text-gray-800"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>
              </span>
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="text-black font-medium mb-1 block">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="text-black font-medium mb-1 block">Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="text-black font-medium mb-1 block">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-3 transition"
            >
              Find your course
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 mt-3">
              I authorise Coding Ninjas to contact me with course updates &amp; offers via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
              <a href="#" className="underline">Privacy Policy</a> &amp;{" "}
              <a href="#" className="underline">Terms of use</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}