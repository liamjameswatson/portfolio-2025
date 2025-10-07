"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../lib/data";

type ProjectProps = (typeof projects)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    // How for user has scrolled
    target: ref,
    offset: ["0 1", "1.33 1"], // Bottom of the viewport crosses to of the target - Ends when bottow of viewport goes a further 33% passed the target
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/8 overflow-hidden sm:pr-8 relative sm:h-[20rem]  hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/60">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                className="bg-black/70 text-sm px-3 py-1 uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title} project`}
          quality={95}
          height={700}
          width={700}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        group-even:-right-[initial] 
        group-even:-left-40
        group-hover:scale
        group-hover:-translate-x-3
        group-hover:-translate-y-3
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        transition

        hidden sm:block
        "
        />
      </section>
    </motion.div>
  );
}

export default Project;
