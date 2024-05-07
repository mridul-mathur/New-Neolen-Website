"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import webdev from "../../../public/images/webdev.gif";
import web3 from "../../../public/images/web4.gif";
import devops from "../../../public/images/devops.gif";
import ai from "../../../public/images/aichat.gif";

export default function Service() {
  return (
    <div className="my-12 flex h-fit w-11/12 max-w-[91.666667%] flex-col items-center justify-center gap-6">
      <div className="flex w-full flex-col items-start justify-center sm:flex-row">
        <h1 className="flex w-full text-3xl font-bold md:w-1/2 md:text-5xl 2xl:text-8xl">
          Our Services
        </h1>
        <h2 className="text-lg font-medium sm:w-1/2 sm:text-xl">
          We offer a ton of services that will help you grow your business. From
          marketing to design to ads campaign, we got it all coverd for you.
        </h2>
      </div>
      <div className="flex w-fit flex-col gap-4 rounded-3xl">
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <div className="flex min-h-full w-full flex-col items-center justify-between overflow-hidden rounded-3xl border border-stone-700 bg-[#191919] md:w-fit md:min-w-[30%]">
            <Image
              src={webdev}
              alt="WebDev"
              className="flex h-full w-full items-center rounded-xl border-none bg-none object-cover object-center"
            />
            <div className="z-10 -mt-12 flex h-1/2 w-full flex-col items-start justify-start gap-4 bg-none p-6 md:-mt-20">
              <h3 className="text-primary text-xl font-bold sm:text-2xl lg:text-4xl">
                Web App Development
              </h3>
              <p className="text-secondary h-full text-wrap text-sm font-medium sm:text-base lg:text-lg">
                Neolen offers diverse web development with both front-end and
                back-end expertise.
              </p>
            </div>
          </div>
          <div className="flex min-h-fit w-full flex-col items-center justify-around overflow-hidden rounded-3xl border border-stone-700 bg-[#191919] md:w-fit md:min-w-[70%]">
            <Image
              src={devops}
              unoptimized={true}
              alt="DevOps"
              className=" flex max-h-full w-full items-center rounded-xl border-none bg-none object-cover object-center  md:-mt-20"
            />
            <div className="z-10 flex h-1/2 w-full flex-col items-start justify-start gap-4 bg-none p-6 md:-mt-20">
              <h3 className="text-primary text-xl font-bold md:text-4xl">
                DevOps Services
              </h3>
              <p className="text-secondary h-full text-wrap text-sm font-medium sm:text-base lg:text-lg">
                With expertise in cloud architecture, we design robust solutions
                tailored to your specific needs, ensuring seamless performance
                even during peak usage. By harnessing the power of these leading
                cloud platforms, we empower your business to scale effortlessly
                while optimizing resource utilization and minimizing operational
                costs.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <div className="flex min-h-full w-full flex-col items-center justify-between gap-2 overflow-hidden rounded-3xl border border-stone-700 bg-[#191919] md:w-fit md:min-w-[70%]">
            <Image
              src={ai}
              unoptimized={true}
              alt="AI/ML"
              className="flex h-64 w-full items-center rounded-xl border-none bg-none object-cover object-center"
            />
            <div className="z-10 flex h-1/2 w-full flex-col items-start justify-start gap-4 p-6">
              <h3 className="text-primary text-xl font-bold md:text-4xl">
                AI/ML Solutions
              </h3>
              <p className="text-secondary text-sm font-medium md:text-lg">
                We specialize in delivering top-notch AI/ML solutions tailored
                specifically to meet your business needs. Our team comprises
                some of the most skilled individuals in the field of ML and LLM.
              </p>
            </div>
          </div>
          <div className="flex min-h-full w-full flex-col items-center justify-between overflow-hidden rounded-3xl border border-stone-700 bg-[#191919] md:w-fit md:min-w-[30%]">
            <Image
              src={web3}
              unoptimized={true}
              alt="Web3"
              className="flex h-64 w-full items-center rounded-xl border-none bg-none object-cover object-center"
            />
            <div className="z-10 flex h-1/2 w-full flex-col items-start justify-start gap-2 p-6">
              <h3 className="text-primary text-xl font-bold md:text-4xl">
                Web 3.0 Services
              </h3>
              <p className="text-secondary text-sm font-medium md:text-lg">
                We specialize in advanced Web3.0 and blockchain solutions to
                boost your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
