"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import cs1 from "../../../public/images/cs1.png";
import cs2 from "../../../public/images/cs2.png";

const CaseStudy = () => {
  const cardData = [
    {
      title: "Project Title 1",
      tags: ["Web", "App", "AI/ML"],
      image: cs1,
    },
    {
      title: "Project Title 2",
      tags: ["tag1", "tag2", "tag3"],
      image: cs2,
    },
    {
      title: "Project Title 3",
      tags: ["tag1", "tag2", "tag3"],
      image: cs2,
    },
    {
      title: "Project Title 4",
      tags: ["tag1", "tag2", "tag3"],
      image: cs2,
    },
    {
      title: "Project Title 5",
      tags: ["tag1", "tag2", "tag3"],
      image: cs2,
    },
    {
      title: "Project Title 6",
      tags: ["tag1", "tag2", "tag3"],
      image: cs2,
    },
    {
      title: "Project Title 7",
      tags: ["tag1", "tag2", "tag3"],
      image: cs2,
    },
    {
      title: "Project Title 8",
      tags: ["tag1", "tag2", "tag3"],
      image: cs2,
    },
  ];
  const [i, setI] = useState(4);

  const loadmore = () => {
    setI(i + 4);
  };

  return (
    <section className="flex h-fit min-h-screen w-11/12 flex-col items-center justify-center gap-12 ">
      <div className="flex w-full flex-col items-start justify-start">
        <h1 className="flex text-3xl font-bold md:text-5xl 2xl:text-8xl">
          Our <span className="text-pink-700">&nbsp; Case Studies</span>
        </h1>
      </div>
      <div className="grid h-fit w-full grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2">
        {cardData.slice(0, i).map((item, index) => (
          <Card
            key={index}
            title={item.title}
            tags={item.tags}
            image={item.image}
          />
        ))}
      </div>

      {i < cardData.length ? (
        <button onClick={loadmore} className="primary-btn">
          Load More...
        </button>
      ) : (
        <Link href={"./email"}>
          <p className="text-lg font-semibold text-pink-700 underline underline-offset-[0.75rem]">
            Let's add one together
          </p>
        </Link>
      )}
    </section>
  );
};

const Card = ({ title, tags, image }) => {
  const showheading = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.3, y: 20 },
    hover: { opacity: 1, ease: "easeOut", duration: 0.3, y: -5 },
  };
  const box = {
    rest: { y: 0, opacity: 1 },
    hover: { y: 0, opacity: 1 },
  };
  const bgdiv = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.3 },
    hover: { opacity: 1, ease: "easeOut", duration: 0.3 },
  };
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      transition={{ duration: 0.5 }}
      className="glass-div relative h-full overflow-hidden rounded-xl border border-stone-700"
    >
      <Image
        src={image}
        alt="Picture of the author"
        className="relative h-96 w-full scale-105 rounded-t-md bg-[#191919] bg-none object-cover transition-all duration-200 hover:scale-100"
      />
      <motion.div
        variants={box}
        className="absolute bottom-0 flex w-full flex-col gap-2 p-4"
      >
        <motion.div
          variants={bgdiv}
          className="absolute left-0 h-full w-full bg-gradient-to-b from-[#00000000] to-[#000000] to-90%"
        ></motion.div>
        <motion.h1
          variants={showheading}
          className="text-primary text-4xl font-semibold"
        >
          {title}
        </motion.h1>
        <div className="z-10 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="h-fit w-fit rounded-full bg-pink-700 bg-opacity-75 p-1 px-3"
            >
              <p key={index} className="text-primary text-sm font-semibold">
                {tag}
              </p>
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudy;
