import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-full" style={{ background: "#121212" }}>
      <Sidebar />
      <main className="flex-1 md:ml-[20%] mt-[56px] md:mt-0 scroll-smooth">

        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="publications">
          <Publications />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

      </main>
    </div>
  );
}
