import React from "react";
import { Star } from "lucide-react";
import sliderImg1 from "../assets/sliderimg11.png";
import { FaQuestion } from "react-icons/fa6";
import AboutSchool from "./AboutSchool";
import AboutDepartment from "./AboutDepartment";
const EventSection = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[1fr,400px] gap-8 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#5779FF] p-3 rounded-xl">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">WHAT'S ABOUT EVENT</h1>
            </div>

            <p className="text-gray-600 leading-relaxed">
              We invite you to delve deeper into the evolving landscape of
              forensic science at our 3rd International Conference on Forensic
              Science, themed "Beyond the Evidence: Reflecting on Forensic
              Innovations to Shape the Future of Criminal Justice." This two-day
              event, scheduled for February 8th and 9th, 2025, at Galgotias
              University, Greater Noida, will bring together renowned experts,
              researchers, and practitioners to explore the latest advancements
              and future trends in forensic investigation.
            </p>

            <button
              className={`px-8 py-4 text-2xl font-bold text-white bg-[#6C7CFF] hover:bg-[#5A6AFF] rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl mt-5`}
            >
              REGISTER NOW
            </button>
          </div>

          {/* Right Column - Images */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src={sliderImg1}
                alt="Crime Scene Tape"
                width={400}
                height={200}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <img
              src={sliderImg1}
              alt="Forensic Evidence"
              width={200}
              height={200}
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <img
              src={sliderImg1}
              alt="Forensic Artifact"
              width={200}
              height={200}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-6 py-12 bg-[#5779FF]">
        <div className="max-w-6xl mx-auto text-white">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="bg-white p-3 rounded-xl backdrop-blur-sm">
              <FaQuestion className="h-8 w-8 text-[#5779FF]" />
            </div>
            <h2 className="text-2xl font-bold text-center uppercase">
              About The Conference
            </h2>
          </div>

          <p className="text-white leading-relaxed text-justify">
            We are honoured to host the 7th Forensis Agora – 3rd International
            Conference on "Beyond the evidence: Reflecting on forensic
            innovations to shape the future of criminal justice", scheduled for
            08-09 February 2025 at Galgotias University, Greater Noida. This
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
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[1fr,400px] gap-8 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#5779FF] p-3 rounded-xl">
                <FaQuestion className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">ABOUT THE UNIVERSITY</h1>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The Galgotias University NAAC A+ Accredited, Uttar Pradesh,
              sponsored by Smt. Shakuntala Educational and Welfare Society has
              been established by the state of Uttar Pradesh under section 2 f 
              of the UGC Act, 1956 vide The Uttar Pradesh Act, 14 of 2011. The
              University commenced its operation during the academic session
              2011-12. Galgotias University opened its door to the first batch
              of approximately 1,700 undergraduate and postgraduate students in
              July of 2011. Now in the year 2023, the University has grown to
              more than 25,000 students.
            </p>
          </div>

          {/* Right Column - Images */}
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={sliderImg1}
              alt="Crime Scene Tape"
              width={400}
              height={200}
              className="rounded-lg shadow-lg w-full object-cover"
            />

            <img
              src={sliderImg1}
              alt="Crime Scene Tape"
              width={400}
              height={200}
              className="rounded-lg shadow-lg w-full object-cover"
            />

            <img
              src={sliderImg1}
              alt="Forensic Evidence"
              width={200}
              height={200}
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <img
              src={sliderImg1}
              alt="Forensic Artifact"
              width={200}
              height={200}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
      <AboutSchool/>
      <AboutDepartment/>
    </>
  );
};

export default EventSection;
