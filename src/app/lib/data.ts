export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projects = [
  {
    title: "Job Application Tracker",
    description: "An app for keeping job applcations in one place",
    // "I built this tool to organize my job applications across multiple platforms (LinkedIn, Indeed, Glassdoor, etc). Each role required a different CV and cover letter, and I often lost track of which version I had sent. After once forgetting what CV I’d submitted to a company before an interview (!), I created this tracker to log applications, platforms, and documents in one place.",
    tags: ["React", "Typescript", "Tailwind"],
    imageUrl: "/job-application-tracker.png",
  },
  {
    title: "Pizza Ordering App",
    description:
      "A pizza ordering app. Part of a udemy course, customers can order a pizza.",
    tags: ["React", "Redux", "Tailwind"],
    imageUrl: "/pizza-app.png",
  },
  {
    title: "Workout Tracker",
    description: "Keep track of my gym workouts",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/workout-tracker.png",
  },
  {
    title: "Elberry Star",
    description: "An ecommerce site for a local handmade art/craft business.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/elberry-star.png",
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
