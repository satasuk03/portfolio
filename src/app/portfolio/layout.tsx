"use client";
import React from "react";
import NavBar from "@/ui/shared/NavBar";
import { SiInstagram } from "@icons-pack/react-simple-icons";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar className="max-w-[1200px] mx-auto mt-4" />
      <div className="md:mx-[15%] mx-4 my-4 max-w-[1200px] bg-terminal-black-800/80 rounded-lg">
        {children}
      </div>
      <footer className="flex justify-center items-center gap-4 my-4 sm:my-8 text-secondary/80">
        <a href="https://www.instagram.com/zezethewanderer/">
          <SiInstagram className="w-6 h-6" />
        </a>
      </footer>
    </>
  );
}
