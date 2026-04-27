import {
  FaPython, FaJava, FaJsSquare, FaReact, FaNodeJs,
  FaDocker, FaAws, FaGitAlt, FaLinux,
} from "react-icons/fa";
import {
  SiTypescript, SiCplusplus, SiScikitlearn, SiNumpy, SiPandas,
  SiPytorch, SiOpenai, SiDjango, SiFlask, SiExpress, SiFastapi,
  SiNextdotjs, SiPostgresql, SiMongodb, SiMysql, SiOracle,
  SiGooglecloud, SiKubernetes, SiPostman, SiJira, SiSwagger, SiTwilio,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      label: "Languages",
      skills: [
        { name: "Python",            icon: <FaPython style={{ color: "#3776AB" }} /> },
        { name: "Java",              icon: <FaJava style={{ color: "#E51F24" }} /> },
        { name: "JavaScript",        icon: <FaJsSquare style={{ color: "#F7DF1E" }} /> },
        { name: "TypeScript",        icon: <SiTypescript style={{ color: "#3178C6" }} /> },
        { name: "C++",               icon: <SiCplusplus style={{ color: "#00599C" }} /> },
        { name: "SQL",               icon: <SiPostgresql style={{ color: "#336791" }} /> },
      ],
    },
    {
      label: "ML & AI",
      skills: [
        { name: "scikit-learn",      icon: <SiScikitlearn style={{ color: "#F7931E" }} /> },
        { name: "NumPy",             icon: <SiNumpy style={{ color: "#4DABCF" }} /> },
        { name: "Pandas",            icon: <SiPandas style={{ color: "#a78bfa" }} /> },
        { name: "PyTorch",           icon: <SiPytorch style={{ color: "#EE4C2C" }} /> },
        { name: "OpenAI API",        icon: <SiOpenai style={{ color: "#e5e7eb" }} /> },
        { name: "Librosa",           icon: null },
        { name: "CodeBERT",          icon: null },
        { name: "Ollama",            icon: null },
        { name: "pgvector",          icon: null },
      ],
    },
    {
      label: "Backend & Frontend",
      skills: [
        { name: "Node.js",           icon: <FaNodeJs style={{ color: "#539E43" }} /> },
        { name: "Express",           icon: <SiExpress style={{ color: "#d1d5db" }} /> },
        { name: "Django",            icon: <SiDjango style={{ color: "#44b78b" }} /> },
        { name: "FastAPI",           icon: <SiFastapi style={{ color: "#009688" }} /> },
        { name: "Flask",             icon: <SiFlask style={{ color: "#d1d5db" }} /> },
        { name: "React",             icon: <FaReact style={{ color: "#61DAFB" }} /> },
        { name: "Next.js",           icon: <SiNextdotjs style={{ color: "#f3f4f6" }} /> },
        { name: "REST APIs",         icon: null },
      ],
    },
    {
      label: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL",        icon: <SiPostgresql style={{ color: "#336791" }} /> },
        { name: "MongoDB",           icon: <SiMongodb style={{ color: "#47A248" }} /> },
        { name: "MySQL",             icon: <SiMysql style={{ color: "#00758F" }} /> },
        { name: "Oracle",            icon: <SiOracle style={{ color: "#F80000" }} /> },
        { name: "AWS",               icon: <FaAws style={{ color: "#FF9900" }} /> },
        { name: "GCP",               icon: <SiGooglecloud style={{ color: "#4285F4" }} /> },
        { name: "Docker",            icon: <FaDocker style={{ color: "#2496ED" }} /> },
        { name: "Kubernetes",        icon: <SiKubernetes style={{ color: "#326CE5" }} /> },
        { name: "Linux",             icon: <FaLinux style={{ color: "#FCC624" }} /> },
      ],
    },
    {
      label: "Tools & Practices",
      skills: [
        { name: "Git",               icon: <FaGitAlt style={{ color: "#F05032" }} /> },
        { name: "Postman",           icon: <SiPostman style={{ color: "#FF6C37" }} /> },
        { name: "Jira",              icon: <SiJira style={{ color: "#0052CC" }} /> },
        { name: "OpenAPI / Swagger", icon: <SiSwagger style={{ color: "#85EA2D" }} /> },
        { name: "Twilio",            icon: <SiTwilio style={{ color: "#F22F46" }} /> },
        { name: "Agile / Scrum",     icon: null },
        { name: "JMeter",            icon: null },
        { name: "Flawfinder",        icon: null },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-8 md:px-20 py-20 flex flex-col justify-center"
      style={{ background: "#121212" }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="section-heading">
          <p className="section-label">04 / Toolkit</p>
          <h2 className="section-title">Skills</h2>
          <div className="section-bar" />
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#555" }}>
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(({ name, icon }) => (
                  <span key={name} className="skill-tag flex items-center gap-2">
                    {icon && <span className="text-base leading-none">{icon}</span>}
                    <span>{name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
