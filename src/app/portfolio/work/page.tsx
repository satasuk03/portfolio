"use client";
import React from "react";
import MyHeroSection from "@/ui/shared/MyHeroSection";
import { WorkExperience } from "@/ui/WorkExperience";

export default function Work() {
  return (
    <div className="flex flex-col gap-0 divide-y divide-terminal-white/5 text-terminal-white/80 font-abel">
      <MyHeroSection />
      <WorkExperience />
    </div>
  );
}
