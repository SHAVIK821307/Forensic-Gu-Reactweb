import React from "react";

import sliderImg1 from "../assets/sliderimg11.png";
import EvenInfo from "../components/EvenInfo";
import HeroSlider from "../components/HeroSlider";
import EventSection from "../components/EventSection";

const Home = () => {
  return (
    <>
      <div className="relative">
        <img
          src={sliderImg1}
          alt="Event Background"
          className="w-full h-full object-cover absolute z-0"
        />
        <HeroSlider />
      </div>
      <EvenInfo />
      <EventSection/>
    </>
  );
};

export default Home;
