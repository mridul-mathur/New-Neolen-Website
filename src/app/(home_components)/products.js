"use client";

import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import neoparser from "../../../public/images/neoparser.png";
import neoaudio from "../../../public/images/neoaudio.png";
import neovideo from "../../../public/images/neovideo.png";
import neovision from "../../../public/images/neovision.png";

const Example = () => {
  return (
    <section className="flex h-fit w-11/12 flex-col items-center justify-center sm:w-10/12">
      <HorizontalScrollCarousel />
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 2], ["25%", "-100%"]);

  return (
    <div
      ref={targetRef}
      className="relative h-[600vh] min-h-screen w-screen sm:h-[500vh] md:h-[400vh] lg:h-[300vh] xl:h-[200vh] 2xl:h-screen "
    >
      <div className="sticky top-0 flex h-screen w-[full] flex-col items-center justify-center gap-12 overflow-hidden">
        <div className="flex w-10/12 flex-col gap-4">
          <h1 className="flex text-3xl font-bold md:text-5xl 2xl:text-8xl">
            Our Products --&gt;
          </h1>
          <h2 className="text-lg font-medium sm:w-1/3 sm:text-xl">
            We offer a range of products aimed at business growth and market
            expansion.
          </h2>
        </div>
        <motion.div style={{ x }} className="flex gap-6 ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="relative flex h-fit w-[20rem] flex-col items-center justify-center overflow-visible md:w-[24rem]"
    >
      <div className="glass-div flex h-fit w-full flex-col gap-4 rounded-3xl border border-stone-700 p-12 px-6">
        <h1 className="flex text-4xl font-bold sm:w-full sm:text-4xl 2xl:text-7xl">
          {card.title}
        </h1>
        <h2 className="text-primary text-xl font-semibold sm:text-2xl">
          {card.subtitle}
        </h2>
        <p className="text-secondary text-lg font-medium">{card.desc}</p>
      </div>
      <Image
        src={card.url}
        alt={`products ${card.id}`}
        className="z-10 -mt-12 h-auto w-2/3 bg-none sm:w-3/5"
      />
    </div>
  );
};

export default Example;

const cards = [
  {
    url: neoparser,
    title: "NeoParser",
    subtitle: "Document / Resume Parser",
    desc: "Introducing Neoparser, our cutting-edge Document and Resume Parser designed to optimize the recruitment process for businesses.",
    id: 1,
  },
  {
    url: neovideo,
    title: "NeoVideo",
    subtitle: "Text To Video Creation",
    desc: "Introducing Neovideo, an edge cutting marketing video creation platform which can create cost effective short marketing reels cloning your avatar and voice from just text.",
    id: 2,
  },
  {
    url: neoaudio,
    title: "Neoleads",
    subtitle: "AI Lead Generation Tool",
    desc: "Introducing Neoleads, an only AI tool IT Agencies needs to generate unlimited leads for their business.",
    id: 3,
  },
  {
    url: neovision,
    title: "Neoverse",
    subtitle: "A Virtual Universe",
    desc: "Introducing Neoverse, A Virtual Universe where players enjoy, make friends, form a team, join guilds and compete with other players for fun or earn.",
    id: 4,
  },
];
