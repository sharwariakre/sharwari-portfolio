import {
    FaPython,
    FaJava,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaDocker,
    FaAws,
    FaGitAlt,
    FaLinux,
    FaChartBar,
} from "react-icons/fa";
import {
    SiTypescript,
    SiSolidity,
    SiFlask,
    SiDjango,
    SiExpress,
    SiJquery,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiOracle,
    SiKubernetes,
    SiGooglecloud,
    SiApache,
    SiPostman,
    SiVite, SiTableau,
} from "react-icons/si";

export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
                { name: "Java", icon: <FaJava className="text-[#E51F24]" /> },
                { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
                { name: "Solidity", icon: <SiSolidity className="text-gray-600" /> },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
                { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-[#539E43]" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
            ],
        },
        {
            title: "Frontend & UI",
            skills: [
                { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: "jQuery", icon: <SiJquery className="text-[#0769AD]" /> },
                { name: "HTML5", icon: <FaJsSquare className="text-[#E34F26]" /> },
            ],
        },
        {
            title: "Other Tools & Technologies",
            skills: [
                { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
                { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" /> },
                { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
                { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
                { name: "Linux", icon: <FaLinux className="text-[#FCC624]" /> },
                { name: "Oracle", icon: <SiOracle className="text-[#F80000]" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
                { name: "Apache", icon: <SiApache className="text-[#D22128]" /> },
                { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
                { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
                { name: "Tableau", icon: <SiTableau className="text-[#E97627]" /> },
                { name: "Power BI", icon: <FaChartBar className="text-[#F2C811]" /> },

            ],
        },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen bg-gray-50 text-gray-900 pl-8 pr-8 md:pl-20 md:pr-20 py-20 flex flex-col justify-start"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-[#b5542b]">Skills</h2>

                <div className="space-y-10">
                    {skillCategories.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-2xl font-semibold mb-4 text-[#b5542b]">
                                {category.title}
                            </h3>

                            {/* Single-line skill row */}
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center space-x-3  p-3 rounded-md shadow-sm hover:shadow-md transition"
                                    >
                                        {skill.icon && (
                                            <div className="text-2xl flex-shrink-0">{skill.icon}</div>
                                        )}
                                        <span className="font-medium text-gray-800">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
