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
      <div className="sm:mx-auto mx-2 my-4 max-w-[1200px] sm:p-8 p-4 bg-terminal-black-800/80 rounded-lg">
        {children}
      </div>
    </>
  );
}
