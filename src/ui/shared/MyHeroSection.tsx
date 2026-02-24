import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";
import { BoxReveal } from "../components/BoxReveal";
import { Lens } from "../components/Lens";

export default function MyHeroSection() {
  return (
    <div className="flex flex-col font-abel px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8">
      <div className="flex sm:flex-row flex-col sm:items-center sm:justify-start gap-8">
        <div className="p-[2px] rounded-full bg-gradient-to-br from-[#ff2975] to-[#17ffb3] mx-auto sm:mx-0">
          <Avatar className="sm:w-[200px] sm:h-[200px] w-[180px] h-[180px]">
            <Lens
              zoomFactor={2}
              lensSize={100}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <AvatarImage
                src="/images/me.webp"
                alt="Zeze Vip — Software Engineer"
              />
              <AvatarFallback className="bg-terminal-grey text-terminal-white font-bold text-6xl">
                SV
              </AvatarFallback>
            </Lens>
          </Avatar>
        </div>
        <div className="text-terminal-white sm:text-left text-center flex flex-col gap-1">
          <BoxReveal duration={0.5} boxClassName="bg-secondary/80">
            <p className="text-secondary/80 text-xs sm:text-left text-center tracking-widest">
              FULLSTACK ENGINEER · PROBLEM SOLVER · CODE CRAFTSMAN
            </p>
          </BoxReveal>
          <BoxReveal
            duration={0.5}
            boxClassName="bg-gradient-to-br from-[#ff2975] from-35% to-[#17ffb3]"
          >
            <h2 className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] sm:text-6xl text-5xl font-semi-bold font-architects-daughter gradient-text leading-tight">
              Zeze Vip
            </h2>
          </BoxReveal>
          <BoxReveal duration={0.5} boxClassName="bg-terminal-white/60">
            <p className="text-xs text-terminal-white/60">
              *vip is from my last name
            </p>
          </BoxReveal>
          <BoxReveal duration={0.5} boxClassName="bg-terminal-white/80">
            <div className="text-secondary sm:text-sm text-xs text-left mt">
              <p className="text-terminal-white/80 leading-relaxed">
                Turning complex challenges into elegant solutions, one line of
                code at a time.
              </p>
            </div>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}
