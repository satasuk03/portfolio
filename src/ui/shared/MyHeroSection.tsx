import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";
import { BoxReveal } from "../components/BoxReveal";

export default function MyHeroSection() {
  return (
    <div className="flex flex-col items-center justify-center mx-4">
      <div className="flex sm:flex-row flex-col items-center justify-center gap-8">
        <Avatar className="sm:w-[250px] sm:h-[250px] w-[200px] h-[200px]">
          <AvatarImage src="/images/me.webp" alt="@shadcn" />
          <AvatarFallback>SV</AvatarFallback>
        </Avatar>
        <div className="text-terminal-white sm:text-left text-center">
          <BoxReveal duration={0.5}>
            <h1 className="sm:text-6xl text-4xl font-bold">Hello, I&apos;m</h1>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <h2 className="sm:text-6xl text-4xl font-bold">Satasuk Vip</h2>
          </BoxReveal>
          <BoxReveal duration={0.5} boxClassName="bg-terminal-white/60">
            <p className="text-xs text-terminal-white/60">
              *vip is from Viparksinlapin
            </p>
          </BoxReveal>
          <BoxReveal duration={0.5} boxClassName="bg-orange-400">
            <div className="text-orange-400 sm:text-sm text-xs text-left mt-2">
              <p className="">
                Software Engineer | Problem Solver | Code Craftsman
              </p>
              <p>
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
