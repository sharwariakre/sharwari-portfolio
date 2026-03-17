import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "CodeNarrator - AI-Powered Code Explanation Tool",
      tech: "FastAPI, Python, Ollama, D3.js",
      description: [
        "Built an autonomous codebase understanding agent that iteratively explores GitHub repositories, maps internal dependencies, and decides what to inspect next without human input.",
        "Integrated a local Qwen2.5-Coder 7B model via Ollama to generate AI architectural summaries like component breakdowns and dependency explanations with no external API or cloud cost.",
        "Produced self-contained HTML reports with interactive D3.js dependency graphs for navigating unfamiliar codebases.",
      ],
    },
    {
      title: "Agentic LLM Workflow for Automated Vulnerability Patch Generation",
      tech: "CodeLlama, CodeAstra, Python, FLawfinder",
      description: [
        "Developed a dual-model pipeline that generates automated patches for C/C++ vulnerabilities using semantic hints.",
        "Reduced vulnerabilities by up to 50% overall and 70% for high-severity CVEs across 92 Juliet Suite cases.",
        "Integrated static analysis (Flawfinder), functional evaluation, and CodeBERT-based similarity scoring.",
      ],
    },
    {
      title: "Real-time Log Analyzer System",
      tech: "Ansible, Docker, Prometheus, Grafana, Flask",
      description: [
        "Built a fully automated CI/CD pipeline using GitHub Actions and a self-hosted runner, enabling zero-touch builds, tests and deployments to a remote Linux VM.",
        "Orchestrated a distributed Docker Compose stack (Flask API, Prometheus, Grafana, Log Feeder) using Ansible.",
        "Implemented Prometheus counters, labeled metrics and latency histograms for real-time observability of log volume, severity patterns, and API performance.",      
      ],
    },
    {
      title: "Dead Serious - Cryptographic Dead Man’s Vault ",
      tech: "React, Node.js, Express, PostgreSQL, AWS S3",
      description: [
        "Built a full-stack zero-knowledge vault (HackNC 2026) that encrypts secrets client-side and releases them only after missed check-ins with unanimous multi-party approval.",
        "Engineered a React + Vite frontend and AES-256-GCM via Web Crypto API; server never sees plaintext or keys.",
        "Designed a Node.js/Express REST API with PostgreSQL and S3 for vault storage, with a TTL-based dead man’s switch triggering the nominee unlock flow on inactivity.",      
      ],
    },
    {
      title: "Speech Sentiment Recognition System – ML-Powered Emotion Detection",
      tech: "Python, Librosa, scikit-learn",
      description: [
        "Developed a feedforward artificial neural network using MLPClassifier to classify emotional states from speech data.",
        "Extracted MFCC features from over 5,000 audio clips using Librosa, applying normalization and preprocessing to improve training efficiency and accuracy.",
      ],
    },
        {
      title: "LocaBites – Multi-Vendor Food Marketplace with Real-Time Cart System",
      tech: "Python, Django, PostgreSQL, AJAX, Payment Gateway API",
      description: [
        "Developing a multi-vendor food ordering platform with vendor onboarding, location-based search, and dynamic AJAX powered cart functionality.",
        "Integrated secure payment gateway and optimized the backend to support growing transaction loads and improve cart processing responsiveness.",
        "Explored leveraging Redis for caching and Celery for asynchronous task handling to support efficient background processing in future iterations.",
      ],
    },
        {
      title: "Decentralized Pharma Supply Chain App – Blockchain-Enabled Traceability (Capstone Project)",
      tech: "Solidity, MetaMask, React.js, MongoDB",
      description: [
        "Developed as the capstone project for my bachelor's program — a decentralized application to track pharmaceutical drug movements, recording transactions on the Ethereum blockchain using smart contracts.",
        "Designed and implemented a role-based access control system, allowing verified stakeholders to trace full supply chain data and customers to verify product authenticity via QR codes.",
        "The project received high commendation from the review panel for its real-world applicability in combating counterfeit pharmaceuticals, with encouragement to explore collaboration with public-sector stakeholders for wider implementation.",
        "A research paper based on this project was later published, highlighting its architecture and blockchain-based validation approach.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 text-gray-900 pl-8 pr-8 md:pl-20 md:pr-20 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#b5542b]">Projects</h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layout
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveProject(index)}
              className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg p-6 border-l-4 border-[#b5542b] transition-all"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.tech}</p>
            </motion.div>
          ))}
        </div>

        {/* Expanded modal view */}
        <AnimatePresence>
          {activeProject !== null && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                key="content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="relative bg-white rounded-xl shadow-xl max-w-3xl w-full p-8 overflow-y-auto max-h-[80vh]"
              >
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-[#b5542b]"
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-3xl font-bold mb-2 text-[#b5542b]">
                  {projects[activeProject].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {projects[activeProject].tech}
                </p>

                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  {projects[activeProject].description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
