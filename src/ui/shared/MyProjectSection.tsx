import React from "react";
import FadeInDiv from "@/ui/components/FadeInDiv";
import { ExpandableProjectCard } from "./ProjectList";

const cards = [
  {
    description: "Mini Project",
    title: "You in Fantasy World",
    src: "images/fantasy-world.webp",
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
      <h2 className="sm:text-2xl text-lg font-architects-daughter text-secondary">
        Recent Projects
      </h2>
      <div className="mt-4">
        <ExpandableProjectCard cards={cards} />
      </div>
    </FadeInDiv>
  );
}
