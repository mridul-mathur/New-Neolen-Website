"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section className="flex h-fit min-h-screen w-full flex-col items-center justify-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-11/12 flex-col items-center justify-center gap-4 sm:w-10/12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex text-center text-7xl font-black sm:text-8xl"
        >
          Innovating with
          <br /> Intelligent Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay:0.5, duration: 0.5 }}
          className="w-2/3 text-center text-base font-medium"
        >
          Neolen is building AI products and provide AI solutions for business
          to Improved Efficiency, Enhanced Customer Service, Better Decision
          Making, Increased Personalization and Competitive Advantage.
        </motion.p>
      </motion.div>
    </section>
  );
}
