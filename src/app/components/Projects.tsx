"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "../lib/data";
import Project from "@/app/components/Project";
import useSectionInView from "../lib/hooks/useSectionInView";

function Projects() {
  const ref = useSectionInView({ sectionName: "Projects", threshold: 0.25 });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center scroll-mt-28"
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>

      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
