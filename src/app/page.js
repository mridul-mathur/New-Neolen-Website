"use client";

import React from "react";
import Hero from "./(home_components)/hero";
import About from "./(home_components)/about";
// import Products from "./(home_components)/products";
import Brands from "./(home_components)/brands";
import EmailSection from "./(home_components)/email";
import Service from "./(home_components)/service";
// import Testimonial from "./(home_page)/testimonial";
import Blogs from "./(home_components)/blogs";
import Footer from "./footer";
import Nav from "./nav";
import CustomCursor from "./cursor";
import CaseStudy from "./(home_components)/casestudy";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main className="flex h-fit w-full flex-col items-center justify-center font-dmsans sm:gap-48">
        <Hero />
        <About />
        <Service />
        <CaseStudy />
        {/* <Products /> */}
        <Brands />
        {/* <Testimonial /> */}
        <Blogs />
        <EmailSection />
      </main>
      <Footer />
    </>
  );
}
