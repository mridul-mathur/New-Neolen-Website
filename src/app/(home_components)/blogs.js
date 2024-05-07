"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import blog1 from "../../../public/images/blog-1.png";
import blog2 from "../../../public/images/blog-2.png";
import blog3 from "../../../public/images/blog-3.png";
import blog4 from "../../../public/images/blog-4.png";
import blog5 from "../../../public/images/blog-5.png";
import blog6 from "../../../public/images/blog-6.png";
import blog7 from "../../../public/images/blog-7.png";
import blog8 from "../../../public/images/blog-8.png";
import { motion } from "framer-motion";

function BlogCard({ title, description, link, image }) {
  return (
    <div className="glass-div flex h-fit min-h-full flex-col items-center justify-start gap-2 rounded-2xl border border-stone-700 p-2 transition duration-200">
      <Image
        src={image}
        alt="blog image"
        className=" h-[8rem] w-full rounded-xl object-cover transition duration-200 hover:scale-95 md:h-[10rem]"
      />
      <div className="flex h-full w-full flex-col justify-between gap-6 p-2">
        <div className="flex w-full flex-col items-center justify-between gap-2">
          <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
          <p className="text-secondary text-lg">{description}</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Link href={link || "#"}>
            <div className="primary-btn">Read More...</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const blogContent = [
  {
    title: "Revamp Workflow with AI Lead Generation",
    description:
      "AI lead generation is the use of artificial intelligence technology to identify and qualify potential customers, also known as leads...",
    link: "https://neolen.com",
    image: blog1,
  },
  {
    title: "High Resolution Text-to-Video Conversion",
    description:
      "Converting text-to-video has always seemed like a frivolous and extremely difficult endeavor, the existing technology offers barely any choices or options when it comes to such conversions.",
    link: "https://neolen.com",
    image: blog2,
  },
  {
    title: "TV Channel and Media Company TRP Measurement",
    description:
      "One of the most crucial aspects of any media company or channel is measuring TRP because it can be used to determine which TV station and...",
    link: "https://neolen.com",
    image: blog3,
  },
  {
    title: "Match resumes with ideal job opportunities",
    description:
      "The perfect CV requires weeks of laborious work and ingenuity, but even with all that effort...",
    link: "https://neolen.com",
    image: blog4,
  },
  {
    title: "Script-to-video tool for endless content creation",
    description:
      "Picture software that transforms the video production industry as we know it. Envision a virtual encyclopedia for all your video needs...",
    link: "https://neolen.com",
    image: blog5,
  },
  {
    title: "Building India's top online Olympiads platform for 100K users",
    description:
      "A company that offers online Olympiads is a game-changer in the world of education and assessment.",
    link: "https://neolen.com",
    image: blog6,
  },
  {
    title: "Building a custom Metaverse for gaming and betting",
    description:
      "Creating a virtual platform that seamlessly blends technology and design is no small feat. It’s akin to building a new world from scratch...",
    link: "https://neolen.com",
    image: blog7,
  },
  {
    title: "Top 10 sales lead gen tools in the market",
    description:
      "Welcome to the exciting world of sales lead generation. Whether you’re a small business owner just starting out, or a seasoned sales professional...",
    link: "https://neolen.com",
    image: blog8,
  },
];

export default function Blogs() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="flex h-fit min-h-full w-full flex-col items-center justify-center gap-12">
      <div className="w-11/12 md:w-10/12 ">
        <h1 className="flex text-3xl font-bold md:text-5xl 2xl:text-8xl">
          Featured{" "}
          <span className="text-pink-700 shadow-pink-700 drop-shadow-md ">
            &nbsp; Blogs
          </span>
        </h1>
      </div>
      <div className="h-fit w-full">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="flex h-fit w-screen cursor-grab items-center justify-center overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width - 100 }}
            className="flex min-h-full w-full gap-12 py-4 sm:px-6 md:grid-rows-3 md:px-12"
          >
            {blogContent.map((blog, i) => (
              <motion.div
                key={i}
                className="flex  min-h-full min-w-[75%] flex-col items-start justify-start rounded-3xl p-4 sm:min-w-[50%] lg:min-w-[25%]"
              >
                <BlogCard key={i} {...blog} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
