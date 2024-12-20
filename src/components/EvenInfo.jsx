import React from "react";
import { Calendar, MapPin, Mic } from "lucide-react";
const EvenInfo = () => {
  return (
    <>
      <div className="bg-[#1e1b2e] block w-full md:max-w-3xl p-4 md:absolute md:left-1/2 bottom-0 md:rounded-tl-2xl md:rounded-tr-2xl md:translate-x-[-50%] z-40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-white" />
            <div>
              <div className="text-[#5b6bff] text-sm font-semibold">DATE</div>
              <div className="text-white font-bold">February 8-9, 2025</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-white" />
            <div>
              <div className="text-[#5b6bff] text-sm font-semibold">Location</div>
              <div className="text-white font-bold">Galgotias University</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Mic className="h-6 w-6 text-white" />
            <div>
              <div className="text-[#5b6bff] text-sm font-semibold">Speakers</div>
              <div className="text-white font-bold">25+ Speakers</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EvenInfo;
