import jobApplicationTrackerImg from "/job-application-tracker.png";
import pizzaAppImg from "/pizza-app.png";
import elberryStarImg from "/elberry-star.png";
import workoutTrackerImg from "/workout-tracker.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projects = [
  {
    title: "Job Application Tracker",
    description:
      "I built this tool to organize my job applications across multiple platforms (LinkedIn, Indeed, Glassdoor, etc). Each role required a different CV and cover letter, and I often lost track of which version I had sent. After once forgetting what CV I’d submitted to a company before an interview (!), I created this tracker to log applications, platforms, and documents in one place.",
    tags: ["React", "Typescript", "Tailwind"],
    imageUrl: jobApplicationTrackerImg,
  },
  {
    title: "Pizza Ordering App",
    description:
      "A pizza ordering app. Part of a udemy course, customers can order a pizza.",
    tags: ["React", "Redux", "Tailwind"],
    imageUrl: pizzaAppImg,
  },
  {
    title: "Elberry Star",
    description: "An ecommerce site for a local handmade art/craft business.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: elberryStarImg,
  },
  {
    title: "Workout Tracker",
    description: "Keep track of my gym workouts",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: workoutTrackerImg,
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
