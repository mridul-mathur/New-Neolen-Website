"use client";

import React from "react";
import Footer from ".././footer";
import Nav from ".././nav";
import CustomCursor from ".././cursor";
import HeroAbout from "./(components)/hero";
import Stats from "./(components)/stats";
import Team from "./(components)/team";

export default function About() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main className="flex h-fit min-h-screen w-full flex-col items-center justify-center font-dmsans sm:gap-6">
        <HeroAbout />
        <Stats />
        <Team />
      </main>
      <Footer />
    </>
  );
}
