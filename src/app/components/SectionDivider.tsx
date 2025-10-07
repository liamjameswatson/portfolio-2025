"use client";
import { motion } from "framer-motion";
import React from "react";

function SectionDivider() {
  return (
    <motion.div
      className="bg-gray my-24 h-16 w-full rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}

export default SectionDivider;
