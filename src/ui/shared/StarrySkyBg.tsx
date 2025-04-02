import React from "react";
import { Particles } from "./Particles";

const StarrySkyBg: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-dark-purple-600 via-dark-purple-400 to-dark-orange">
      <Particles
        className="fixed pointer-events-none inset-0 opacity-70"
        size={1}
        quantity={50}
        staticity={30}
        ease={80}
        color="#be8959"
        refresh
      />
      <div className="z-10">{children}</div>
    </div>
  );
};

export default StarrySkyBg;
