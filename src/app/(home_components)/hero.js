"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import headsets from "../../public/images/headsets.png";
import Instagram from "../../../public/images/Vector-2.svg";
import Facebook from "../../../public/images/Vector-3.svg";
import LinkedIn from "../../../public/images/Vector.svg";
import Twitter from "../../../public/images/Vector-1.svg";
import Youtube from "../../../public/images/Vector-4.svg";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="mt-12 flex h-fit min-h-screen w-11/12 flex-col items-center justify-evenly gap-6 sm:w-10/12 sm:py-1 md:mt-6">
      <div className="flex flex-col items-center justify-center gap-2 pt-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.75 }}
          className="flex w-full items-center justify-center sm:justify-start"
        >
          <h1 className="xl:text-10xl flex text-left text-7xl font-semibold sm:text-8xl md:-mb-12 md:ml-6">
            Elevating <br /> Business
          </h1>
        </motion.div>
        <motion.div
          initial={{ scale: 0.1, opacity: 0.25 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
          className="relative -my-16 flex h-[45vh] w-[200%] items-center justify-center p-0 sm:-my-16 sm:h-[25vh] md:-my-28 md:h-fit lg:-my-36 lg:w-full 2xl:-my-48"
        >
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 0.75 }}
            transition={{ delay: 1, duration: 0.75 }}
            className="absolute -z-50 h-48 w-48 bg-pink-700 blur-[6rem] md:h-96 md:w-96"
          ></motion.div>
          {/* <Image src={headsets} alt="vr" className="h-auto w-2/5" /> */}
          <Spline scene="https://prod.spline.design/1fXEXcFmBiODpy2e/scene.splinecode" />
        </motion.div>
        <div className="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row sm:items-end sm:gap-2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.75 }}
            className="flex w-full flex-col items-start justify-center gap-4 sm:w-4/5 md:w-2/3 md:items-start lg:w-1/3"
          >
            <p className="text-lg font-medium sm:text-xl">
              {" "}
              Neolen is building AI products and provide AI solutions for
              business to Improved Efficiency, Enhanced Customer Service, Better
              Decision Making, Increased Personalization and Competitive
              Advantage.
            </p>
            <button className="primary-btn">Read Docs</button>
          </motion.div>
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.75 }}
            className="xl:text-10xl text-right text-7xl font-semibold sm:text-8xl md:mr-6 "
          >
            Through <br /> AI
          </motion.h1>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.75 }}
        className="flex w-full flex-col items-center justify-center gap-6 self-end align-bottom sm:flex-row sm:justify-between"
      >
        <p className="text-base font-medium sm:w-1/2 sm:text-lg">
          Neolen© — The modern data company
        </p>
        <div className="flex flex-wrap items-center justify-center space-x-6 sm:w-1/2 sm:justify-end">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="hover-bg-colored cursor-pointer rounded-md p-2"
            >
              <Image
                src={social.icon}
                alt={social.name}
                className="h-6 w-auto md:h-4"
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

const socials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/neolen_services/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Neolenofficial/",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/neolen/",
    icon: LinkedIn,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/neolen_services",
    icon: Twitter,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UC2bF4g7wZjHmUJ1y9c1j5Jw",
    icon: Youtube,
  },
];
