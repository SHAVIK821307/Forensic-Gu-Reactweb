import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import sliderImg1 from "../assets/sliderimg11.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src={sliderImg1}
              alt="Event Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#5779FF] bg-opacity-30"></div>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-black">
              <h1 className="text-4xl md:text-6xl font-bold tracking-wide ">
              Forensic Agora 2025
              </h1>
              <h2 className="text-3xl md:text-5xl mt-4 font-semibold">
              3rd International Conference on Forensic Science.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src={sliderImg1}
              alt="Event Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#5779FF] bg-opacity-30"></div>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
                Join Us for the Event
              </h1>
              <h2 className="text-3xl md:text-5xl mt-4 font-semibold">
                Innovation Meets Forensics
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
