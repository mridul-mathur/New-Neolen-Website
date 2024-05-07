"use client";

import React from "react";
import logo from "../../public/images/logo-w.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 1.5 }}
      className=" fixed left-0 top-0 z-50 h-fit w-screen border-b border-gray-500 bg-black bg-opacity-25 shadow drop-shadow-2xl backdrop-blur-sm md:w-full"
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} className="h-10 w-auto" alt="Neolen Logo" />
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="md:primary-btn hidden md:flex">
            Read Docs
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="text-secondary inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="hover-bg-colored h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 rtl:space-x-reverse ">
            <Link href="./about">
              <li className="nav-btn">
                <button href="#">About</button>
              </li>
            </Link>
            <li className="nav-btn">
              <button href="#">Services</button>
            </li>
            <li className="nav-btn">
              <button href="#">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
