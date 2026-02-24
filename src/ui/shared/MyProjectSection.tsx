import React from "react";
import FadeInDiv from "@/ui/components/FadeInDiv";
import { ExpandableProjectCard } from "./ProjectList";

const cards = [
  {
    description: "Bakery Website",
    title: "From Chuta",
    src: "/images/fromchuta.webp",
    ctaText: "Visit",
    ctaLink: "https://fromchuta.com",
    content: () => {
      return (
        <p>
          A website for a home bakery — showcasing freshly baked goods made with
          love. Built for my mother&apos;s bakery business.
        </p>
      );
    },
  },
  {
    description: "Magic Project",
    title: "You in Fantasy World",
    src: "/images/fantasy-world.webp",
    ctaText: "Visit",
    ctaLink: "https://magic.zeze.app",
    content: () => {
      return (
        <p>
          Ever wondered who you’d be in a fantasy world? Court Jester? Goblin
          Accountant? Discover your hilarious fate with our magical (and mildly
          ridiculous) fantasy career predictor! — Powered by nothing but your
          phone number!
        </p>
      );
    },
  },
];

export default function MyProject() {
  return (
    <FadeInDiv>
      <h2 className="sm:text-2xl text-lg font-medium font-poppins text-secondary/80">
        Recent Projects
      </h2>
      <div className="sm:mt-4 mt-2 font-abel font-medium">
        <ExpandableProjectCard cards={cards} />
      </div>
    </FadeInDiv>
  );
}
