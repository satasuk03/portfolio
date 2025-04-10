"use client";

import { MyTerminal } from "@/ui/shared/MyTerminal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div>
        <MyTerminal redirectTo="/portfolio" />
      </div>
    </div>
  );
}
