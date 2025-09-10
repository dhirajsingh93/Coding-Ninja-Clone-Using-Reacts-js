import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// Dummy Images (replace with real ones)
import person from "../assets/person.png";
import calsoft from "../assets/calsoft.png";

// Dummy Data
const placements = [
  {
    name: "Naveen Kumar Dubey",
    hike: "169% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Non-CS/IT",
    photo: person,
  },
  {
    name: "Amit Sharma",
    hike: "120% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Non-CS/IT",
    photo: person,
  },
  {
    name: "Rohit Singh",
    hike: "200% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Tier 2/3 college",
    photo: person,
  },
  {
    name: "Neha Verma",
    hike: "180% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Tier 2/3 college",
    photo: person,
  },
  {
    name: "Arjun Mehta",
    hike: "150% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Non-CS/IT",
    photo: person,
  },
  {
    name: "Simran Kaur",
    hike: "210% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Tier 2/3 college",
    photo: person,
  },
    {
    name: "Simran Kaur",
    hike: "210% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Tier 2/3 college",
    photo: person,
  },
    {
    name: "Simran Kaur",
    hike: "210% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Tier 2/3 college",
    photo: person,
  },
    {
    name: "Simran Kaur",
    hike: "210% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Tier 2/3 college",
    photo: person,
  },
];

export default function PlacementSlider() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl font-semibold mb-10 relative">
          Our Ninjas at top tech companies
          <span className="text-sm absolute right-2 top-0 font-semibold cursor-pointer">
            ⬇️ Download placement report
          </span>
        </h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={16}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={false} // ❌ no arrows
          modules={[Navigation, Autoplay]}
          className="pb-12"
        >
          {placements.map((p, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group outline-none">
                {/* Profile photo */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-18 h-18 rounded-full overflow-hidden shadow-md z-10 -mb-3">
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card */}
                <div className="bg-gray-50 shadow-lg rounded-xl p-6 pt-12 w-48 mx-auto relative transition group-hover:shadow-2xl">
                  <img
                    src={p.companyLogo}
                    alt="company"
                    className="mx-auto h-18 object-contain mb-2 mt-10"
                  />
                  <p className="text-gray-600 text-[16px]">{p.role}</p>

                  {/* Tooltip on hover */}
                  <div className="absolute left-1/2 -translate-x-1/2  bottom-[0px] w-64 bg-black text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity p-4 z-50">
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-black"></div>
                    <p className="font-semibold">{p.name}</p>
                    <p>{p.hike}</p>
                    <a
                      href={p.profile}
                      className="text-blue-400 underline mt-2 inline-block"
                    >
                      LinkedIn profile →
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
