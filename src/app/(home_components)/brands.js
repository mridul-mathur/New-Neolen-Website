"use client";

import React from "react";
import Image from "next/image";
import b1 from "../../../public/images/brand1.png";
import b2 from "../../../public/images/brand2.png";
import b3 from "../../../public/images/brand3.png";
import b4 from "../../../public/images/brand4.png";
import b5 from "../../../public/images/brand5.png";
import b6 from "../../../public/images/brand6.png";
import b7 from "../../../public/images/brand7.png";
import b8 from "../../../public/images/brand8.png";

export default function Brands() {
  return (
    <main className="flex w-screen items-center justify-center overflow-hidden py-12">
      <div className="absolute -z-50 h-28 w-full rounded-full bg-pink-700 blur-[72px]"></div>
      <div className="flex h-fit w-full justify-between space-x-16 overflow-hidden">
        <div className="flex animate-loop-scroll space-x-16">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-[4rem] w-auto max-w-none shadow-2xl"
            />
          ))}
        </div>
        <div className="flex animate-loop-scroll space-x-16" aria-hidden="true">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.logo}
              alt={brand.name}
              className=" h-[4rem] w-auto max-w-none"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

const brands = [
  {
    name: "Video Wiki",
    logo: b1,
  },
  {
    name: "Trusted Productions",
    logo: b2,
  },
  {
    name: "Paw Purrfect",
    logo: b3,
  },
  {
    name: "PACOM",
    logo: b4,
  },
  {
    name: "Get Boarded",
    logo: b5,
  },
  {
    name: "Fury Fan",
    logo: b6,
  },
  {
    name: "EStart",
    logo: b7,
  },
  {
    name: "Bloom Cap",
    logo: b8,
  },
];
