"use client";
import React from "react";
import MyHeroSection from "@/ui/shared/MyHeroSection";
import { WorldMap } from "@/ui/components/WorldMap";

const OFFSET_LAT = -15;

const thailand = {
  lat: 13.736717 + OFFSET_LAT,
  lng: 103.523186,
};

const tokyo = {
  lat: 35.681236 + OFFSET_LAT,
  lng: 139.767125,
};

const southKorea = {
  lat: 37.579692 + OFFSET_LAT,
  lng: 126.977969,
};

const southAfrica = {
  lat: -33.924929 + OFFSET_LAT,
  lng: 18.424055,
};

const croatia = {
  lat: 45.81501 + OFFSET_LAT,
  lng: 15.981919,
};

const australia = {
  lat: -25.274398 + OFFSET_LAT,
  lng: 133.775136,
};

const taiwan = {
  lat: 25.032969 + OFFSET_LAT,
  lng: 121.565414,
};

const india = {
  lat: 20.593684 + OFFSET_LAT,
  lng: 78.96288,
};

const hongKong = {
  lat: 22.396428 + OFFSET_LAT,
  lng: 114.109497,
};

const macau = {
  lat: 22.198745 + OFFSET_LAT,
  lng: 113.546055,
};

const singapore = {
  lat: 1.352083 + OFFSET_LAT,
  lng: 103.819836,
};

export default function Travel() {
  return (
    <div className="flex flex-col gap-5 sm:gap-10 text-terminal-white/80 font-abel">
      <MyHeroSection />
      <WorldMap
        dots={[
          { start: thailand, end: southKorea },
          { start: thailand, end: southAfrica },
          { start: thailand, end: croatia },
          { start: thailand, end: australia },
          { start: thailand, end: taiwan },
          { start: thailand, end: india },
          { start: thailand, end: tokyo },
          { start: thailand, end: hongKong },
          { start: hongKong, end: macau },
          { start: hongKong, end: singapore },
        ]}
      />
    </div>
  );
}
