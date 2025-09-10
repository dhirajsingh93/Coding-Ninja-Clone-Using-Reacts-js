import React from "react";

export default function Newlunches() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 -mb-10  my-8">
     

      {/* Timeline */}
      <div className="relative flex items-start w-full max-w-6xl">


        {/* Icon and Title */}
        <div className="flex items-center mb-8 relative z-10">
          <div className="bg-white shadow-md rounded-full p-3 border border-gray-200">
            {/* Example icon placeholder */}
            <span className="text-black font-bold mt-1">🏕</span>
          </div>
          <h3 className="ml-3 mt-0.5 text-lg font-semibold">New Lunches</h3>
          <span className="ml-3 px-3 py-1 bg-indigo-100 mt-0.5 text-indigo-700 text-sm rounded-lg">
            For graduates
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {/* Card 1 */}
        <div className="bg-indigo-50 rounded-xl shadow p-10 ml-10 flex flex-col">
          <div className="flex items-center mb-8">
            <div className="w-15 h-15 flex items-center justify-center rounded-full bg-white shadow">
              📚
            </div>
            <h4 className="ml-4 mt-1.5 text-[22px] font-semibold">
              Advanced Certification in Gen AI& <br /> Multi Agent Systems
            </h4>
          </div>
          <div className="flex justify-between text-[17px] gap-8 text-gray-600 mt-3 -mb-6">
            <span>140+ Hrs of content</span>
            <span>600+ Problems</span>
            <span>10k+ Learners</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-indigo-50 rounded-xl shadow p-10 ml-2.5 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow">
              📊
            </div>
            <h4 className="ml-4  mt-1.5 text-[22px]  font-semibold">
             
                 Advanced Certification in Gen AI& <br /> for Non-tech professionals
            </h4>
          </div>
          <div className="flex justify-self-center-safe gap-8 text-[17px] text-gray-600 mt-auto -mb-6">
            <span>100+ Hrs of content</span>
            <span>300+ Problems</span>
            <span>2000+ Learners</span>
          </div>
        </div>
      </div>
    </div>
  );
}
