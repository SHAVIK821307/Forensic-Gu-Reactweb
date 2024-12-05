import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="h-screen relative z-0"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-[#5779FF] bg-opacity-0"></div>
          <div className="absolute px-6 inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide ">
              Forensic Agora 2025
            </h1>
            <h2 className="text-3xl md:text-5xl mt-4 font-semibold">
              3rd International Conference on Forensic Science.
            </h2>
            <button
              className={`px-8 py-4 text-2xl font-bold text-white bg-[#6C7CFF] hover:bg-[#5A6AFF] rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl mt-5`}
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-screen">
          {/* <img
              src={sliderImg1}
              alt="Event Background"
              className="w-full h-full object-cover"
              /> */}
          <div className="absolute inset-0 bg-[#5779FF] bg-opacity-30"></div>
          <div className="absolute px-6 inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
              Forensic Agora 2025
            </h1>
            <h2 className="text-3xl md:text-5xl mt-4 font-semibold">
              7th Forensis Agora
            </h2>
            <button
              className={`px-8 py-4 text-2xl font-bold text-white bg-[#6C7CFF] hover:bg-[#5A6AFF] rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl mt-5`}
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* slide 3 */}
      <SwiperSlide>
        <div className="relative h-screen">
          {/* <img
              src={sliderImg1}
              alt="Event Background"
              className="w-full h-full object-cover"
              /> */}
          <div className="absolute inset-0 bg-[#5779FF] bg-opacity-30"></div>
          <div className="absolute px-6 inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
              Forensic Agora 2025
            </h1>
            <h2 className="text-3xl md:text-5xl mt-4 font-semibold">
              Beyond the Evidence: Reflecting on Forensic Innovations to Shape
              the Future of Criminal Justice
            </h2>
            <button
              className={`px-8 py-4 text-2xl font-bold text-white bg-[#6C7CFF] hover:bg-[#5A6AFF] rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl mt-5`}
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
