"use client";
import React from "react";
import MyHeroSection from "@/ui/shared/MyHeroSection";
import { WorkExperience } from "@/ui/WorkExperience";

export default function Travel() {
  return (
    <div className="flex flex-col gap-5 sm:gap-10 text-terminal-white/80 font-abel">
      <MyHeroSection />
      <WorkExperience />
    </div>
  );
}
