import React from "react";
import { Particles } from "./Particles";

const SkyBg: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="fixed inset-0 min-h-screen w-full bg-cover bg-center outline-none overflow-hidden"
      style={{ backgroundImage: `url('/images/starry_bg.webp')` }}
    >
      <Particles
        className="fixed pointer-events-none inset-0 opacity-70"
        size={1}
        quantity={50}
        staticity={30}
        ease={80}
        color="#be8959"
        refresh
      />
      <div className="relative h-screen w-full overflow-y-auto z-10">
        {children}
      </div>
    </div>
  );
};

export default SkyBg;
