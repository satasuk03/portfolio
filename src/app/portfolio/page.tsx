"use client";
import React from "react";
import MyHeroSection from "@/ui/shared/MyHeroSection";
import MyProject from "@/ui/shared/MyProjectSection";

export default function Portfolio() {
  return (
    <>
      <MyHeroSection />
      <hr className="text-terminal-white/30 sm:my-8 my-4 mx-4" />
      <MyProject />
    </>
  );
}
