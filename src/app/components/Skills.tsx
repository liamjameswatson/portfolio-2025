"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skills } from "../lib/data";
import { motion } from "framer-motion";
import useSectionInView from "../lib/hooks/useSectionInView";

function Skills() {
  const ref = useSectionInView({ sectionName: "Skills", threshold: 0.5 });

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 ">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
