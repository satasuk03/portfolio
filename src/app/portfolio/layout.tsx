"use client";
import React from "react";
import NavBar from "@/ui/shared/NavBar";
import { SiInstagram, SiGithub } from "@icons-pack/react-simple-icons";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="sticky top-0 z-50 bg-terminal-black-800/70 backdrop-blur-md border-b border-terminal-white/5">
        <NavBar className="max-w-[1200px] mx-auto" />
      </div>
      <div className="md:mx-[15%] mx-4 my-4 max-w-[1200px] bg-terminal-black-800/80 rounded-xl border border-terminal-white/5">
        {children}
      </div>
      <footer className="flex justify-center items-center gap-4 my-4 sm:my-8 text-secondary/80">
        <a href="https://www.instagram.com/zezethewanderer/" target="_blank">
          <SiInstagram className="w-6 h-6 hover:text-secondary hover:scale-110 transition-all duration-200" />
        </a>
        <a href="https://github.com/satasuk03" target="_blank">
          <SiGithub className="w-6 h-6 hover:text-secondary hover:scale-110 transition-all duration-200" />
        </a>
      </footer>
    </>
  );
}
