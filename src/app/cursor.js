"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX - 24,
        y: e.clientY - 24,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const style = {
    transform: "translate(-50%, -50%)",
    width: "3rem",
    height: "3rem",
    borderRadius: "100%",
    background:
      "linear-gradient(45deg,rgb(229, 194, 255, 0.5) 0%,rgb(193, 242, 255, 0.5) 50%,rgb(255, 191, 221, 0.5) 100%)",
    opacity: 1,
    zIndex: 60,
    cursor: "none",
    pointerEvents: "none",
  };

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      borderRadius: ["100%"],
    },
  };

  return (
    <motion.div
      className={`fixed left-0 top-0`}
      style={style}
      variants={variants}
      animate="default"
      transition={{
        x: {
          duration: 0,
          ease: "linear",
          repeat: 0,
          type: "spring",
          stiffness: 10,
        },
        y: {
          duration: 0,
          ease: "linear",
          repeat: 0,
          type: "spring",
          stiffness: 10,
        },
        default: {},
      }}
    ></motion.div>
  );
};

export default CustomCursor;
