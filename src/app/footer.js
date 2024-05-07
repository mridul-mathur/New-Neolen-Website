"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Instagram from "../../public/images/Vector-2.svg";
import Facebook from "../../public/images/Vector-3.svg";
import LinkedIn from "../../public/images/Vector.svg";
import Twitter from "../../public/images/Vector-1.svg";
import Youtube from "../../public/images/Vector-4.svg";

export default function Footer() {
  return (
    <footer className="glass-div flex w-full flex-col justify-between rounded-t-3xl p-12">
      <div className="flex flex-col items-start justify-between gap-6 text-left sm:flex-row lg:text-left">
        <div className="flex w-full flex-col gap-6 px-4 lg:w-6/12">
          <div className="flex flex-col justify-center gap-2 md:justify-start">
            <h2 className="text-lg font-semibold sm:text-2xl">
              Let&apos;s keep in touch!
            </h2>
            <p className="text-base font-medium">
              Find us on any of these platforms, we respond 1-2 business days.
            </p>
          </div>
          <div className="flex space-x-6">
            <Image src={Instagram} alt="instagram" className="h-6 w-auto" />

            <Image src={Facebook} alt="facebook" className="h-6 w-auto" />

            <Image src={LinkedIn} alt="linkedin" className="h-6 w-auto" />

            <Image src={Twitter} alt="twitter" className="h-6 w-auto" />

            <Image src={Youtube} alt="youtube" className="h-6 w-auto" />
          </div>
        </div>
        <div className="items-top mb-6 flex w-full px-4 lg:w-6/12 ">
          <div className="ml-auto w-full px-4 lg:w-4/12">
            <span className="mb-2 block text-sm font-semibold uppercase">
              Useful Links
            </span>

            <Link
              className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
              href="/"
            >
              About Us
            </Link>

            <Link
              className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
              href="/"
            >
              Blog
            </Link>

            <Link
              className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
              href="/"
            >
              Github
            </Link>

            <Link
              className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
              href="/"
            >
              Free Products
            </Link>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <span className="mb-2 block text-sm font-semibold uppercase">
              Other Resources
            </span>
            <Link
              className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
              href="/"
            >
              MIT License
            </Link>
            <Link
              className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
              href="/"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
              href="/"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
              href="/"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-between">
        <div className="mx-auto w-full px-4 text-center md:w-4/12">
          <div className="py-1 text-sm font-semibold">
            <Link href="/" className="hover:text-blue" target="_blank">
              Copyright © 2024 Neolen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
