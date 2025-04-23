import React from "react";
import FadeInDiv from "@/ui/components/FadeInDiv";
import Badge from "../components/Badge";

export default function Skills() {
  return (
    <FadeInDiv>
      <h2 className="sm:text-2xl text-lg font-medium font-poppins text-secondary/80">
        Skills
      </h2>

      <div className="sm:mt-4 mt-2 flex flex-row gap-2 font-semibold flex-wrap">
        <Badge className="w-fit text-[#063b29] bg-white/80 text-nowrap">
          TypeScript
        </Badge>
        <Badge className="w-fit text-pink-800 bg-pink-300/80 text-nowrap">
          Python🐍
        </Badge>
        <Badge className="w-fit text-black/60 bg-orange-500 text-nowrap">
          Backend/Architect
        </Badge>
        <Badge className="w-fit text-blue/70 bg-blue-800 text-nowrap">
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
