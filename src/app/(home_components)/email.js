"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/images/logo-icon.png";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    console.log("Email submitted");
    //email submission code comes here
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1.25"],
    smooth: 1,
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress, opacity: scrollYProgress }}
      className=" flex h-fit min-h-full w-11/12 items-center justify-center py-12 sm:w-10/12"
    >
      <div className="glass-div grid w-full  grid-cols-1 items-center justify-center rounded-3xl sm:grid-cols-2">
        <div className="flex h-fit flex-col gap-6 px-6 py-12 pl-12">
          <h1 className="flex text-3xl font-bold md:text-5xl 2xl:text-8xl">
            Let&apos;s <span className="text-pink-700">&nbsp; Connect</span>
          </h1>
          <h2 className="text-lg font-medium">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </h2>
          <div className=" flex w-full items-center justify-center">
            <div className="absolute -z-50 h-36 w-36 rounded-full bg-pink-700 blur-[4rem] md:h-60 md:w-60"></div>
            <Image
              src={logo}
              alt="Headset"
              className="w-3/5 self-center justify-self-center"
            />
          </div>
        </div>
        <div className="flex w-full gap-6 px-6 py-12 pr-12">
          {emailSubmitted ? (
            <p className="text-lg font-medium">Email sent successfully!</p>
          ) : (
            <form
              className="flex w-full flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="email" className="ml-3 text-lg font-medium">
                  Your email
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  className="w-full border-b-2 border-[#f6f6f601] bg-transparent p-3 text-lg font-medium outline-none focus:rounded-lg focus:border-2 focus:border-pink-700 focus:text-base"
                  placeholder="Name Surname"
                />
              </div>
              <div>
                <label htmlFor="email" className="ml-3 text-lg font-medium">
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="w-full border-b-2 border-[#f6f6f601] bg-transparent p-3 text-lg font-medium outline-none focus:rounded-lg focus:border-2 focus:border-pink-700 focus:text-base"
                  placeholder="email@mail.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="ml-3 text-lg font-medium">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="w-full border-b-2 border-[#f6f6f601] bg-transparent p-3 text-lg font-medium outline-none focus:rounded-lg focus:border-2 focus:border-pink-700 focus:text-base"
                  placeholder="Just saying hi"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="ml-3 w-full text-lg font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full border-b-2 border-[#f6f6f601] bg-transparent p-3 text-lg font-medium outline-none focus:rounded-lg focus:border-2 focus:border-pink-700 focus:text-base"
                  placeholder="Let's talk about..."
                />
              </div>
              <button type="submit" className="primary-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default EmailSection;
