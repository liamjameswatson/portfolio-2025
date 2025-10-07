"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

import useSectionInView from "../lib/hooks/useSectionInView";

function About() {
  const ref = useSectionInView({ sectionName: "About", threshold: 0.75 });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I’m a <span className="font-medium">full-stack developer</span>{" "}
        specialising in{" "}
        <span className="font-medium">React, Next.js, and Node.js</span>. I’m
        currently working as a{" "}
        <span className="font-medium">freelance web developer</span> in my local
        area, building fast, responsive websites for small businesses. Alongside
        that, I train <span className="font-medium">AI models</span> for a major
        AI company, where I work on tasks that require precision, critical
        thinking, and a strong understanding of language and data. With a
        background in <span className="font-medium">engineering</span>, I bring
        a structured, problem-solving mindset to everything I do—whether it’s
        writing clean frontend code or contributing to cutting-edge AI systems.{" "}
        <span className="italic">
          I’m passionate about solving real problems
        </span>
        , building meaningful products, and continually growing as a developer.
      </p>
    </motion.section>
  );
}

export default About;
