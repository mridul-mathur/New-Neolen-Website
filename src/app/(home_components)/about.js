"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1.25"],
    smooth: 1,
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const [totalUsers, setTotalUsers] = useState(75);
  const [totalClick, setTotalClick] = useState(100);
  const [userIntervalId, setUserIntervalId] = useState(null);
  const [clickIntervalId, setClickIntervalId] = useState(null);

  const handleMouseOver = (setterFunc, intervalIdSetter, maxValue) => () => {
    const interval = setInterval(() => {
      setterFunc((prevTotal) =>
        prevTotal < maxValue ? prevTotal + 1 : prevTotal,
      );
      if (
        setterFunc((prevTotal) =>
          prevTotal < maxValue ? prevTotal + 1 : prevTotal,
        ) >= maxValue
      ) {
        clearInterval(interval);
      }
    }, 200);
    setTotalUsers(75);
    setTotalClick(100);
    intervalIdSetter(interval);
  };

  const handleMouseLeave = (setterFunc, intervalId) => () => {
    clearInterval(intervalId);
    setterFunc(0);
  };
  const inf_val = "∞";
  const handleMouseOver2 = () => {
    setTotalUsers(75);
    setTotalClick(100);
  };
  const handleMouseLeave2 = () => {
    setTotalUsers(75);
    setTotalClick(100);
  };
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress }}
      className="flex h-full min-h-fit w-11/12 flex-col items-center justify-center py-6 sm:w-11/12 md:py-1"
    >
      <div className="custom-shadow glass-div relative grid  w-full grid-cols-1  gap-6 rounded-3xl px-6 py-12 sm:h-4/5 sm:grid-cols-2 sm:gap-2">
        <div className="flex flex-col items-start justify-start gap-2 sm:gap-4 sm:px-4 md:gap-6 md:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-5xl 2xl:text-8xl">
            <span className="text-pink-700">Neolen&apos;s&nbsp;</span> Vision
            for Business Transformation
          </h1>
          <p className="text-lg font-medium sm:text-xl ">
            Neolen introduces you to a landscape where efficiency isn&apos;t
            just a goal but a tangible reality, where customer service
            transcends expectations, where decisions are not just made but
            optimized, where personalization is not a luxury but a standard, and
            where competitive advantage isn&apos;t fleeting but enduring.
          </p>
          <button className="primary-btn">About Us</button>
        </div>
        <div className="text-primary flex w-full flex-col items-center justify-center py-4 sm:px-6">
          <div
            onMouseLeave={handleMouseLeave(setTotalUsers, userIntervalId)}
            onMouseOver={handleMouseOver(setTotalUsers, setUserIntervalId, 75)}
            className="relative flex w-full flex-col items-start justify-center gap-2 border-b-2 border-[#f6f6f6] py-4 transition-all duration-300 hover:border-pink-700  hover:text-pink-700 sm:px-6"
          >
            <p className="text-xs font-bold sm:text-sm md:text-base">Users</p>
            <h1 className=" text-7xl font-bold sm:text-6xl md:text-8xl">{`${totalUsers}K`}</h1>
          </div>
          <div
            onMouseLeave={handleMouseLeave(setTotalClick, clickIntervalId)}
            onMouseOver={handleMouseOver(
              setTotalClick,
              setClickIntervalId,
              100,
            )}
            className="flex w-full flex-col items-start justify-center gap-2 border-b-2 border-[#f6f6f6] py-4 transition-all duration-300 hover:border-pink-700  hover:text-pink-700 sm:px-6"
          >
            <p className="text-xs font-bold sm:text-sm md:text-base">Clicks</p>
            <h1 className=" text-7xl font-bold sm:text-6xl md:text-8xl">{`${totalClick}M+`}</h1>
          </div>
          <div
            onMouseOver={handleMouseOver2}
            onMouseLeave={handleMouseLeave2}
            className="flex w-full flex-col items-start justify-center gap-2 border-b-2 border-[#f6f6f6] py-4 transition-all duration-300 hover:border-pink-700  hover:text-pink-700 sm:px-6"
          >
            <p className="text-xs font-bold sm:text-sm md:text-base">
              Our Potential
            </p>
            <h1 className="text-7xl font-bold sm:text-6xl md:text-8xl">{`${inf_val}`}</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
