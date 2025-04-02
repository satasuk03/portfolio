"use client";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/prophecy");

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
