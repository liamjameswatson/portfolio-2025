"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "../lib/hooks/useSectionInView";
import { sendEmail } from "../actions/email";
import SubmitButton from "./UI/SubmitButton";
import toast from "react-hot-toast";

function Contact() {
  const ref = useSectionInView({ sectionName: "Contact" });

  return (
    <motion.section
      id="contact"
      className="mt-48 scroll-mt-28 mb-20 sm:mb-28 w-[min(100% ,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-700 text-center -mt-4 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:thedevondeveloper@gmail.com">
          thedevondeveloper@gmail.com{" "}
        </a>
        or through this form{" "}
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          console.log(data);
          toast.success("Thank you! Email sent successfully");
        }}
      >
        <label className=" px-2 mb-3 dark:text-white/80">
          Name{" "}
          <span className="text-gray-950/70 dark:text-white/70">
            (required)
          </span>
        </label>
        <input
          className="mb-6 h-10 px-4 rounded-lg borderBlack dark:bg-white/80 dark:focus:bg-white dark:outline-none transition-all "
          type="text"
          required
          maxLength={500}
          name="name"
        />
        <label className="mb-3 px-2 dark:text-white/80">
          Email{" "}
          <span className="text-gray-950/70 dark:text-white/70">
            (required)
          </span>
        </label>
        <input
          className="mb-6 h-10 px-4 rounded-lg borderBlack dark:bg-white/80 dark:focus:bg-white dark:outline-none transition-all"
          type="email"
          required
          maxLength={500}
          name="senderEmail"
        />
        <label className="mb-3 px-2 dark:text-white/80">
          Message{" "}
          <span className="text-gray-950/70 dark:text-white/70">
            (required)
          </span>
        </label>
        <textarea
          className="h-52 rounded-lg borderBlack p-4 dark:bg-white/80 dark:focus:bg-white dark:outline-none transition-all"
          required
          maxLength={5000}
          name="message"
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}

export default Contact;
