import React from "react";

// images
import cllg_1 from "../assets/cllg.webp";
import iitimg from "../assets/iitimg.webp"

// SVG icons
import logocllg from "../assets/icons/logocllg.svg";
import chatgpt from "../assets/icons/chatgpt.svg";

export default function Iit() {
  const courses = [
    {
      title: "PG Certification in Data Analytics with GenAI",
      institute: "E&ICT Academy, IIT Guwahati",
      img: cllg_1,
      logo: logocllg, // 👈 Alag logo add kiya
      icons: [logocllg, chatgpt, chatgpt],
      duration: "6 months",
      tag: "For graduates",
    },
    {
      title: "PG Certification in Data Science with GenAI",
      institute: "E&ICT Academy, IIT Guwahati",
      img: cllg_1,
      logo: chatgpt,
      icons: [logocllg, chatgpt, chatgpt],
      duration: "9 months",
      tag: "For graduates",
    },
    {
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      institute: "IITM Pravartak, TIH IIT Madras",
      img: cllg_1,
      logo: logocllg,
      icons: [logocllg, chatgpt, chatgpt],
      duration: "6 months",
      tag: "For graduates",
    },
    
    {
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      institute: "IITM Pravartak, TIH IIT Madras",
      img: cllg_1,
      logo: chatgpt,
      icons: [logocllg, chatgpt, chatgpt, chatgpt],
      duration: "6 months",
      tag: "For graduates",
    },
    {
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      institute: "IITM Pravartak, TIH IIT Madras",
      img: cllg_1,
      logo: logocllg,
      icons: [logocllg, chatgpt, chatgpt, logocllg],
      duration: "6 months",
      tag: "For graduates",
    },
    {
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      institute: "IITM Pravartak, TIH IIT Madras",
      img: cllg_1,
      logo: chatgpt,
      icons: [logocllg, chatgpt, chatgpt, logocllg],
      duration: "6 months",
      tag: "For graduates",
    },
  ];

  return (
    <section
      className="bg-amber-50 py-12 px-4"
      aria-labelledby="iit-section-title"
    >
      <div className="relative max-w-6xl mx-auto border-gray-900 ">
        {/* Vertical line */}
        <div 
          className="absolute left-6 top-0 bottom-0 border-1 h-340 border-gray-900 border-dotted"
          aria-hidden="true"
        ></div>

        {/* Icon and Title */}
        <div className="flex items-center mb-4 relative z-10">
          <div className="bg-white shadow rounded-full p-3 border border-gray-200">
            <span role="img" aria-label="graduation cap">
              🎓
            </span>
          </div>
          <h2 id="iit-section-title" className="ml-3 text-lg font-semibold">
            IIT Certifications
          </h2>
        </div>

        {/* Tag */}
        <span className="ml-14 px-3 py-1 bg-yellow-800 text-white text-sm rounded-full">
          For graduates
        </span>

       {/* <span className="ml-14 px-3 py-1 bg-yellow-800 text-white text-sm rounded-full">
          For college
        </span> */}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 ml-16">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 min-h-[400px] relative"
            >
              {/* Logo overlay (dynamic per course) */}
              <div className="absolute top-40  left-6 bg-white h-12 w-12 rounded-lg shadow flex items-center justify-center">
                <img src={course.logo} alt="course logo" className="h-8 w-8" />
              </div>

              {/* Course Image */}
              <img
                src={course.img}
                alt={`${course.institute} - ${course.title}`}
                className="h-48 w-80 ml-3 mt-2.5 rounded-[25px] object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-800 mb-1 text-xl">
                  {course.title}
                </h3>
                <span className="bg-amber-100 text-amber-800 text-[14px] px-3 py-2 mt-4 rounded-full inline-block mb-3">
                  {course.institute}
                </span>

                {/* Footer icons + duration */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-2 mb-3">
                    {course.icons.map((iconSrc, i) => (
                      <img
                        key={i}
                        src={iconSrc}
                        alt="course icon"
                        className="h-6 w-6 hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                  <span className="text-black text-[16px]">
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-6 top-0 bottom-0 "></div>

<div className="z-10"><img src={iitimg} className="w-xl ml-100  h-[148] " alt="" srcset="" /></div>

    </section>
  );
}
