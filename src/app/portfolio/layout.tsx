"use client";
import React from "react";
import NavBar from "@/ui/shared/NavBar";

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
    </>
  );
}
