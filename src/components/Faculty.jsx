import React from "react";
import { Users } from "lucide-react";

const faculty = [
  {
    name: "Ankush Singla",
    role: "Co-Founder & Instructor",
    img: "https://via.placeholder.com/100x100.png?text=A",
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Competitive Programming",
    ],
    linkedin: "#",
  },
  {
    name: "Parikh Jain",
    role: "Instructor & Founding Member at Coding Ninjas",
    img: "https://via.placeholder.com/100x100.png?text=P",
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    ],
    teaches: [
      "Basics of Python with DSA",
      "Competitive Programming",
      "Product Companies Interview Prep",
    ],
    linkedin: "#",
  },
  {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: "https://via.placeholder.com/100x100.png?text=N",
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: "https://via.placeholder.com/100x100.png?text=N",
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: "https://via.placeholder.com/100x100.png?text=N",
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: "https://via.placeholder.com/100x100.png?text=N",
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: "https://via.placeholder.com/100x100.png?text=N",
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: "https://via.placeholder.com/100x100.png?text=N",
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: "https://via.placeholder.com/100x100.png?text=N",
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
];

const FacultySection = () => {
  return (
    <section className="max-w-6xl py-16 px-45 flex overflow-hidden">
      {/* ==== Left Timeline ==== */}
      <div className="relative flex flex-col items-center mr-8 -mt-2">
        {/* Vertical Line */}
        <div className="absolute top-12 bottom-0 h-160 w-[1px] bg-orange-500"></div>

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-md shadow-md z-10">
          <Users size={24} />
        </div>
      </div>

      {/* ==== Right Content ==== */}
      <div className="flex-1 max-w-7xl">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-10">
          Faculty that brings out the best in you
        </h2>

        {/* Faculty Cards in Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hide scrollbar-custom pb-12">
          {faculty.map((f, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-90 ml-4 bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={f.img}
                alt={f.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{f.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{f.role}</p>

              {/* Companies */}
              <div className="flex justify-center gap-3 mb-4">
                {f.companies.map((c, i) => (
                  <img key={i} src={c} alt="company" className="w-6 h-6" />
                ))}
              </div>

              {/* Teaches */}
              <div className="text-sm text-gray-700 mb-3">
                <p className="font-medium">Teaches</p>
                {f.teaches.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={f.linkedin}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                LinkedIn profile ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
