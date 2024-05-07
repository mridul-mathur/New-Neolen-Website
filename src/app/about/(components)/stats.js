"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
  const total_click = 50;
  const total_users = 75;
  return (
    <section className="flex min-h-[50vh] w-11/12 flex-col items-center justify-center gap-12 sm:w-10/12">
      <h1 className="flex text-center text-4xl font-bold sm:text-5xl md:text-5xl 2xl:text-8xl">
        Numbers Speak Louder Than Words
      </h1>
      <div className="grid h-fit w-10/12 grid-cols-1 items-center justify-center gap-2 justify-self-center sm:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-div flex w-full flex-col items-center justify-center gap-2 rounded-xl p-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex text-center text-4xl font-semibold sm:text-6xl"
          >
            {total_users}k
          </motion.h1>
          <p className="text-xs font-bold sm:text-lg md:text-2xl">Users</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-div flex w-full flex-col items-center justify-center gap-2 rounded-xl p-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex text-center text-4xl font-semibold sm:text-6xl"
          >
            {total_click}M+
          </motion.h1>
          <p className="text-xs font-bold sm:text-lg md:text-2xl">Clicks</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-div flex w-full flex-col items-center justify-center gap-2 rounded-xl p-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex text-center text-4xl font-semibold sm:text-6xl"
          >
            ∞
          </motion.h1>
          <p className="text-xs font-bold sm:text-lg md:text-2xl">Potential</p>
        </motion.div>
      </div>
    </section>
  );
}
