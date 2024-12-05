import React from "react";
import { FaQuestion } from "react-icons/fa6";
import sliderImg1 from "../assets/sliderimg11.png";
const AboutDepartment = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-[1fr,400px] gap-8 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#5779FF] p-3 rounded-xl">
              <FaQuestion className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">ABOUT THE DEPARTMENT</h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            We are honoured to host the 7th Forensis Agora – 3rd International
            Conference on “Beyond the evidence: Reflecting on forensic
            innovations to shape the future of criminal justice”, scheduled for
            08–09 February 2025 in collaboration with our MOU partner Forensic
            Experts Pvt. Ltd. at Galgotias University, Greater Noida. This
            prestigious event is meticulously curated for professionals and
            experts from diverse fields, including criminal investigation, legal
            practice, research, and academia. The conference aspires to be a
            dynamic platform that unites the scientific and legal communities to
            explore and discuss groundbreaking advancements in the realm of
            forensic science and its interplay with the law. Over two enriching
            days, participants will engage in plenary lectures, invited talks,
            panel discussions, and paper/poster presentations, showcasing
            cutting-edge research and innovations. Representatives from renowned
            forensic science and legal institutions will converge to foster
            dialogue, collaboration, and knowledge exchange. Join us as we
            embark on this academic journey to illuminate new horizons in
            forensic science and legal integration, promising an unforgettable
            experience for all attendees.
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="relative grid grid-cols-2 gap-4 ">
          
            <img
              src={sliderImg1}
              alt="Crime Scene Tape"
              width={400}
              height={200}
              loading="lazy"
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <img
              src={sliderImg1}
              alt="Crime Scene Tape"
              width={400}
              height={200}
              loading="lazy"
              className="rounded-lg shadow-lg w-full object-cover"
            />
         

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

export default AboutDepartment;
