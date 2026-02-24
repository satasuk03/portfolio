import React from "react";
import FadeInDiv from "@/ui/components/FadeInDiv";
import Badge from "../components/Badge";

export default function Skills() {
  return (
    <FadeInDiv className="px-6 pt-4 pb-6 sm:px-10 sm:pt-6 sm:pb-8">
      <div className="flex items-center gap-3 mb-3 sm:mb-5">
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-[#ff2975] to-[#17ffb3] flex-shrink-0" />
        <h2 className="sm:text-xl text-base font-semibold font-poppins text-secondary/90">
          Skills
        </h2>
      </div>

      <div className="sm:mt-4 mt-2 flex flex-row gap-2 sm:gap-3 font-semibold flex-wrap">
        <Badge className="w-fit text-[#063b29] bg-white/80 text-nowrap">
          TypeScript
        </Badge>
        <Badge className="w-fit text-pink-800 bg-pink-300/80 text-nowrap">
          Python🐍
        </Badge>
        <Badge className="w-fit text-black/60 bg-orange-500 text-nowrap">
          Backend/Architect
        </Badge>
        <Badge className="w-fit text-white/80 bg-blue-800 text-nowrap">
          SQL
        </Badge>
        <Badge className="w-fit text-white/70 bg-purple-800 text-nowrap">
          React
        </Badge>
        <Badge className="w-fit text-[#ebced8] text-nowrap">Climbing 🧗</Badge>
        <Badge className="w-fit bg-[#17ffb3]/80 text-[#063b29] text-nowrap">
          Photography 📸
        </Badge>
      </div>
    </FadeInDiv>
  );
}
