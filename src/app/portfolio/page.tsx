"use client";
import React from "react";
import MyHeroSection from "@/ui/shared/MyHeroSection";
import MyProject from "@/ui/shared/MyProjectSection";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8">
      <MyHeroSection />
      <hr className="text-terminal-white/30 mx-4" />
      <MyProject />
    </div>
  );
}
