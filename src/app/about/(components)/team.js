"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <div className="flex min-h-screen w-11/12 flex-col items-center justify-center gap-2 sm:w-10/12">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="flex text-4xl font-bold sm:text-5xl md:text-5xl 2xl:text-8xl">
          Meet Our Team
        </h1>
        <p className="text-center text-lg font-medium">
          Our team is the chocolate chips in our cookies
        </p>
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-12 sm:grid-cols-2 md:grid-cols-3">
        {teamcontent.map((member, index) => (
          <Cards
            key={index}
            fullname={member.fullname}
            role={member.role}
            img={member.img}
          />
        ))}
      </div>
    </div>
  );
}

function Cards({ fullname, role, img }) {
  return (
    <div className="flex h-fit w-full items-center rounded-xl border-2 p-3">
      <section className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] shadow-md duration-300 hover:scale-110 hover:cursor-pointer hover:from-[#C9A9E9] hover:to-[#7EE7FC]">
        <Image src={img} alt={fullname} width={56} height={56} />
      </section>

      <section className="m-3 block border-l border-gray-300">
        <div className="pl-3">
          <h3 className="text-sm font-semibold text-gray-600">{fullname}</h3>
          <h3 className="bg-gradient-to-l from-[#005BC4] to-[#27272A] bg-clip-text text-lg font-bold text-transparent">
            {role}
          </h3>
        </div>
        <div class="flex gap-3 pl-3 pt-2">
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-4 fill-white stroke-2 duration-200 hover:scale-125 hover:cursor-pointer"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-4 fill-white stroke-2 duration-200 hover:scale-125 hover:cursor-pointer"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-4 fill-white stroke-2 duration-200 hover:scale-125 hover:cursor-pointer"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-4 fill-white stroke-2 duration-200 hover:scale-125 hover:cursor-pointer"
          >
            <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
          </svg>
        </div>
      </section>
    </div>
  );
}

const teamcontent = [
  {
    fullname: "First Name",
    role: "Founder",
    img: "/",
  },
  {
    fullname: "First Name",
    role: "Co-Founder",
    img: "/",
  },
  {
    fullname: "First Name",
    role: "Tech Lead",
    img: "/",
  },
  {
    fullname: "First Name",
    role: "Junior Developer",
    img: "/",
  },
  {
    fullname: "First Name",
    role: "UI UX Designer",
    img: "/",
  },
];
