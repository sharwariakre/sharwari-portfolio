import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-full">

      <Sidebar />
      <main className="flex-1 md:ml-[20%] mt-[60px] md:mt-0 overflow-y-visible scroll-smooth">



        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center">
          <Experience />
        </section>

        <section id="education" className="min-h-screen flex flex-col justify-start">
          <Education />
        </section>

        <section id="skills" className="min-h-screen">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="publications" className="min-h-screen">
          <Publications />
        </section>
      </main>
    </div>
  );
}
