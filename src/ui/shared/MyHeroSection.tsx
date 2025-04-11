import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";
import { BoxReveal } from "../components/BoxReveal";
import { Lens } from "../components/Lens";

export default function MyHeroSection() {
  return (
    <div className="flex flex-col items-center mt-8 font-abel">
      <div className="flex sm:flex-row flex-col items-center justify-center gap-8">
        <Avatar className="sm:w-[200px] sm:h-[200px] w-[180px] h-[180px]">
          <Lens
            zoomFactor={2}
            lensSize={100}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <AvatarImage src="/images/me.webp" alt="@shadcn" />
            <AvatarFallback className="bg-terminal-grey text-terminal-white font-bold text-6xl">
              SV
            </AvatarFallback>
          </Lens>
        </Avatar>
        <div className="text-terminal-white sm:text-left text-center">
          <BoxReveal duration={0.5} boxClassName="bg-secondary/80">
            <p className="text-secondary/80 text-xs sm:text-left text-center">
              FULLSTACK ENGINEER | PROBLEM SOLVER | CODE CRAFTSMAN
            </p>
          </BoxReveal>
          <BoxReveal
            duration={0.5}
            boxClassName="bg-gradient-to-br from-[#ff2975] from-35% to-[#17ffb3]"
          >
            <h2 className="text-transparent drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] sm:text-6xl text-5xl font-semi-bold font-architects-daughter bg-clip-text bg-gradient-to-br from-[#ff2975] from-35% to-[#17ffb3]">
              Satasuk Vip
            </h2>
          </BoxReveal>
          <BoxReveal duration={0.5} boxClassName="bg-terminal-white/60">
            <p className="text-xs text-terminal-white/60">
              *vip is from Viparksinlapin
            </p>
          </BoxReveal>
          <BoxReveal duration={0.5} boxClassName="bg-terminal-white/80">
            <div className="text-secondary sm:text-sm text-xs text-left mt-2">
              <p className="text-terminal-white/80">
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
