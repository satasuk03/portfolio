"use client";
import React from "react";
import MyHeroSection from "@/ui/shared/MyHeroSection";
import MyProject from "@/ui/shared/MyProjectSection";
import About from "@/ui/shared/About";
import Skills from "@/ui/shared/Skills";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-5 sm:gap-10 text-terminal-white/80 font-abel">
      <MyHeroSection />
      <About />
      <Skills />
      <MyProject />
    </div>
  );
}
