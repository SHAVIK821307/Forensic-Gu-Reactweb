import React from "react";
import { FaQuestion } from "react-icons/fa6";
import sliderImg1 from "../assets/sliderimg11.png";
const AboutSchool = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-[1fr,400px] gap-8 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#5779FF] p-3 rounded-xl">
              <FaQuestion className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">ABOUT THE SCHOOL</h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            The School of Biosciences and Technology (SBT) at Galgotias
            University, Greater Noida, is dedicated to advancing knowledge in
            the fields of biosciences and biotechnology through a robust
            academic and research framework. The school offers undergraduate,
            postgraduate, and doctoral programs across various disciplines,
            preparing students for careers in biotechnology, healthcare,
            agriculture, and environmental sciences. SBT is home to several
            specialized departments that provide a comprehensive understanding
            of biological sciences. These include: Department of Biotechnology,
            Department of Microbiology, Department of Bioinformatics, Department
            of Environmental Science and Department of Forensic Science. The
            school boasts modern laboratories, cutting-edge research facilities,
            and strong industry collaborations, ensuring that students gain both
            theoretical knowledge and practical skills. With a focus on
            research-driven education, SBT prepares students to contribute to
            innovations in the biosciences and biotechnology sectors, addressing
            global challenges in health, agriculture, and environmental
            sustainability.
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="col-span-2">
              <img
                src={sliderImg1}
                alt="Crime Scene Tape"
                width={400}
                height={200}
                loading="lazy"
                className="rounded-lg shadow-lg w-full object-cover"
              />
          </div>

          

          <img
            src={sliderImg1}
            alt="Forensic Evidence"
            width={200}
            height={200}
            loading="lazy"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <img
            src={sliderImg1}
            alt="Forensic Artifact"
            width={200}
            height={200}
            loading="lazy"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;
