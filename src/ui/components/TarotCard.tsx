import React from "react";
import NextImage from "next/image";
import { Card3D } from "./Card3D";
import { cn } from "../utils";

interface CardProps {
  title: string;
  titleClassName?: string;
  imgSrc: string;
  className?: string;
}

export const TarotCard = ({
  title,
  titleClassName,
  imgSrc,
  className,
}: CardProps) => {
  return (
    <Card3D>
      <div
        className={cn(
          `relative w-[300px] pointer-events-none select-none`,
          className
        )}
      >
        {/* Fix glare */}
        {/* <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]" /> */}
        <h2
          className={cn(
            "text-xl font-bold absolute top-[28px] left-1/2 right-1/2 -translate-x-1/2 z-30 w-fit text-nowrap text-center font-yusei-magic pointer-events-none select-none",
            titleClassName
          )}
        >
          {title}
        </h2>
        <NextImage
          src="/images/card-frame.webp"
          alt="Card Frame"
          width={300}
          height={100}
          className="relative inset-0 object-contain z-20 pointer-events-none select-none"
        />
        <NextImage
          src={imgSrc}
          alt={title}
          width={300}
          height={100}
          className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 scale-73 z-10 object-contain pointer-events-none select-none"
        />
      </div>
    </Card3D>
  );
};

export default TarotCard;
