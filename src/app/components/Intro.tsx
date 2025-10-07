"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import useSectionInView from "../lib/hooks/useSectionInView";
import { useActiveSectionContext } from "../context/active-section-context";

function Intro() {
  const ref = useSectionInView({ sectionName: "Home", threshold: 0.5 });

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-40"
      id="home"
    >
      {/* IMAGE */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profile-pic.png"
              alt="photo of Liam"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-2 border-white shadow-xl "
            />
          </motion.div>
          <motion.span
            className="absolute text-2xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      {/* WRITING */}
      <motion.h1
        className="mb-10 mt-4 text-2xl font-medium leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Liam.</span> I'm a
        <span className="font-bold"> full-stack developer</span> building apps
        with <span className="italic">React</span> and{" "}
        <span className="italic">Next.js</span> from sunny Devon 🌞. I also
        train AI models to write code.{" "}
        <span className="italic">Always open to exciting projects.</span>
      </motion.h1>

      {/* Links */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 
          dark:bg-white/10 "
          href="/CV.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="group-hover:translate-y-1 transition opacity-60" />
        </a>

        <a
          href="https://www.linkedin.com/in/liam-watson-a9845b257/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10
          
          dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/liamjameswatson"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10
          dark:bg-white/10 dark:text-white/60 dark:hover:text-white
          "
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
