import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const VerticalSliders = () => {
  return (
    <section className="bg-white py-16 px-6 flex justify-center font-sans">
      <div className="max-w-6xl w-105 flex flex-col md:flex-row items-start gap-10">
        
        {/* ==== Left Content ==== */}
      

          {/* Timeline Icon + Line (optional, can remove if not needed) */}
          <div className="flex items-center gap-4">
            <div className="relative flex flex-col items-center ">
              {/* Vertical Line */}
              <div className="absolute top-12 bottom-0 w-[2px] bg-orange-400 h-150" ></div>
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-md shadow-md z-10">
                <span className="font-bold">👤</span>
              </div>
            </div>
            <span className="text-gray-700 text-xl font-bold">Guided learning experience</span>
            
          </div>
        </div>

        {/* ==== Right Sliders ==== */}
        <div className="md:w-1/2 w-full flex gap-6">
          {/* First Vertical Slider */}
          <div className="w-60">
            <Swiper
              direction="vertical"
              slidesPerView={3}
              spaceBetween={12}
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="h-[540px] rounded-2xl shadow-lg"
            >
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/nfYr7JX/projects-sample.png"
                  alt="Project 1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
               <SwiperSlide>
                <img
                  src="https://i.ibb.co/nfYr7JX/projects-sample.png"
                  alt="Project 1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/mHbQd7K/projects-sample2.png"
                  alt="Project 2"
                  className="w-full h-full object-cover rounded-xl"
                />

              </SwiperSlide>
              
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/k4H6cfs/projects-sample3.png"
                  alt="Project 3"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Second Vertical Slider */}
          <div className="w-60">
            <Swiper
              direction="vertical"
              slidesPerView={3}
              spaceBetween={12}
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="h-[540px] rounded-2xl shadow-lg "
            >
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/mHbQd7K/projects-sample2.png"
                  alt="Project A"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/mHbQd7K/projects-sample2.png"
                  alt="Project A"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/k4H6cfs/projects-sample3.png"
                  alt="Project B"
                  className="w-full h-full object-cover rounded-xl"
                />
                
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/nfYr7JX/projects-sample.png"
                  alt="Project C"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      
    </section>
  );
};

export default VerticalSliders;
