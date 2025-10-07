import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SectionDivider from "./components/SectionDivider";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <main>
        <Intro />
        <SectionDivider />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
