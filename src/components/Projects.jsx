import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Aria Companion — AI Voice Agent for Elderly Care",
      tech: ["FastAPI", "Twilio", "Ollama (Llama3)", "Whisper", "pgvector"],
      featured: true,
      github: "https://github.com/sharwariakre",
      description: [
        <>Built a <strong style={{ color: "#F5F5F5" }}>proactive AI voice companion</strong> that autonomously calls elderly individuals for daily check-ins, orchestrating an end-to-end pipeline with Twilio, STT (Faster-Whisper), TTS (Kokoro), and multi-turn LLM conversation management.</>,
        <>Implemented <strong style={{ color: "#F5F5F5" }}>episodic memory</strong> using LLM-based fact extraction and semantic retrieval (sentence-transformers + pgvector cosine similarity), enabling personalized conversations grounded in prior call history.</>,
        <>Designed a real-time mood scoring system extracting acoustic features via Librosa with a rolling per-user baseline and dual-channel SMS escalation triggered by LLM-detected distress or post-call mood regression.</>,
      ],
    },
        {
      title: "Meeting Negotiator — Multi-Agent Scheduling System",
      tech: ["LangGraph", "FastAPI", "React", "Google Calendar API", "Ollama"],
      featured: true,
      github: "https://github.com/sharwariakre/meeting-negotiator",
      description: [
        <>Delivers <strong style={{ color: "#F5F5F5" }}>~10s end-to-end</strong> scheduling negotiation via a 4-agent LangGraph pipeline; advocate agents propose slots per participant and an arbitrator runs deterministic interval-intersection on 20+ real calendar slots before LLM selection, preventing hallucination.</>,
        <>Integrated <strong style={{ color: "#F5F5F5" }}>Google Calendar freebusy API</strong> with per-participant OAuth and automatic event creation on consensus, backed by a 5-endpoint FastAPI backend and React UI.</>,
        <>3-round negotiation loop with escalation fallback; <strong style={{ color: "#F5F5F5" }}>45 tests</strong> across overlap logic, graph runs, and state schema validated via GitHub Actions CI.</>,
      ],
    },
    {
      title: "CodeNarrator — AI-Powered Codebase Explorer",
      tech: ["FastAPI", "Python", "Ollama", "D3.js"],
      featured: true,
      github: "https://github.com/sharwariakre",
      description: [
        <>Developed an <strong style={{ color: "#F5F5F5" }}>autonomous codebase agent</strong> that maps dependencies and self-directs exploration across 15 repos, cutting onboarding time from ~2 hours to under 5 minutes.</>,
        <>Integrated a local <strong style={{ color: "#F5F5F5" }}>Qwen2.5-Coder 7B model via Ollama</strong> to generate architectural summaries with no external API or cloud cost.</>,
        <>Produced self-contained HTML reports with interactive <strong style={{ color: "#F5F5F5" }}>D3.js dependency graphs</strong> for navigating unfamiliar codebases.</>,
      ],
    },
    {
      title: "Agentic LLM Workflow for Automated Vulnerability Patch Generation",
      tech: ["CodeLlama", "CodeAstra", "Python", "Flawfinder"],
      featured: true,
      github: "https://github.com/sharwariakre",
      description: [
        <>Developed an <strong style={{ color: "#F5F5F5" }}>agentic dual-model LLM pipeline</strong> to auto-generate patches for C/C++ vulnerabilities using semantic hints.</>,
        <>Reduced vulnerabilities by up to <strong style={{ color: "#F5F5F5" }}>50% overall</strong> and <strong style={{ color: "#F5F5F5" }}>70% for high-severity CVEs</strong> across 92 Juliet Suite cases.</>,
        <>Evaluated patches across security, functionality (&gt;85% compilation success), and CodeBERT similarity dimensions.</>,
      ],
    },
    {
      title: "Real-time Log Analyzer System",
      tech: ["Ansible", "Docker", "Prometheus", "Grafana", "Flask"],
      featured: false,
      description: [
        "Built a fully automated CI/CD pipeline using GitHub Actions and a self-hosted runner for zero-touch deployments to a remote Linux VM.",
        "Orchestrated a distributed Docker Compose stack (Flask API, Prometheus, Grafana, Log Feeder) using Ansible.",
        "Implemented Prometheus counters and latency histograms for real-time observability of log volume, severity patterns, and API performance.",
      ],
    },
    {
      title: "Dead Serious — Cryptographic Dead Man's Vault",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "AWS S3"],
      featured: false,
      description: [
        "Built a full-stack zero-knowledge vault (HackNC 2026) that encrypts secrets client-side and releases them only after missed check-ins with unanimous multi-party approval.",
        "Engineered a React + Vite frontend using AES-256-GCM via Web Crypto API; server never sees plaintext or keys.",
        "Designed a Node.js/Express REST API with PostgreSQL and S3, with a TTL-based dead man's switch triggering the nominee unlock flow on inactivity.",
      ],
    },
    {
      title: "Speech Sentiment Recognition System",
      tech: ["Python", "Librosa", "scikit-learn"],
      featured: false,
      description: [
        "Developed a feedforward neural network using MLPClassifier to classify emotional states from speech data.",
        "Extracted MFCC features from over 5,000 audio clips using Librosa, applying normalization and preprocessing to improve accuracy.",
      ],
    },
    {
      title: "LocaBites — Multi-Vendor Food Marketplace",
      tech: ["Python", "Django", "PostgreSQL", "AJAX", "Payment Gateway API"],
      featured: false,
      description: [
        "Developing a multi-vendor food ordering platform with vendor onboarding, location-based search, and dynamic AJAX-powered cart functionality.",
        "Integrated secure payment gateway and optimized the backend to support growing transaction loads.",
        "Explored Redis for caching and Celery for async task handling to support background processing.",
      ],
    },
    {
      title: "Decentralized Pharma Supply Chain — Blockchain Traceability",
      tech: ["Solidity", "MetaMask", "React.js", "MongoDB"],
      featured: false,
      description: [
        "Capstone project: a decentralized application to track pharmaceutical drug movements on the Ethereum blockchain using smart contracts.",
        "Designed role-based access control allowing stakeholders to trace supply chain data and customers to verify authenticity via QR codes.",
        "Received high commendation from the review panel; research paper published on the architecture and blockchain-based validation approach.",
      ],
    },
  ];

  const CARD_BG = "#1E1E1E";
  const SURFACE = "#161616";

  return (
    <section
      id="projects"
      className="min-h-screen px-8 md:px-20 py-20"
      style={{ background: "#181818" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="section-heading">
          <p className="section-label">05 / Work</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-bar" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              onClick={() => setActiveProject(index)}
              className="cursor-pointer rounded-xl p-5 border transition-all duration-200 group"
              style={{
                background: CARD_BG,
                borderColor: project.featured ? "rgba(217,122,67,0.2)" : "rgba(255,255,255,0.05)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = project.featured
                  ? "rgba(217,122,67,0.45)"
                  : "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = project.featured
                  ? "rgba(217,122,67,0.2)"
                  : "rgba(255,255,255,0.05)";
              }}
            >
              {project.featured && (
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3 border"
                  style={{ color: "#D97A43", background: "rgba(217,122,67,0.08)", borderColor: "rgba(217,122,67,0.25)" }}
                >
                  ★ Featured
                </span>
              )}
              <h3
                className="text-sm font-bold mb-3 leading-snug transition-colors duration-200"
                style={{ color: "#F5F5F5" }}
              >
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs rounded-full"
                    style={{ background: SURFACE, color: "#6B6B6B", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeProject !== null && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                key="content"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ type: "spring", stiffness: 140, damping: 22 }}
                className="relative rounded-2xl shadow-2xl max-w-2xl w-full p-8 overflow-y-auto max-h-[85vh]"
                style={{ background: "#1E1E1E", border: "1px solid rgba(255,255,255,0.08)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-5 right-5 transition-colors duration-200"
                  style={{ color: "#555" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#D97A43")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#555")}
                >
                  <X className="w-5 h-5" />
                </button>

                {projects[activeProject].featured && (
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4 border"
                    style={{ color: "#D97A43", background: "rgba(217,122,67,0.08)", borderColor: "rgba(217,122,67,0.25)" }}
                  >
                    ★ Featured
                  </span>
                )}

                <h3 className="text-2xl font-bold mb-2 pr-8 leading-snug" style={{ color: "#F5F5F5" }}>
                  {projects[activeProject].title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {projects[activeProject].tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs rounded-full font-medium"
                      style={{ background: "#161616", color: "#6B6B6B", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {projects[activeProject].github && (
                  <a
                    href={projects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold mb-5 hover:underline"
                    style={{ color: "#D97A43" }}
                  >
                    <FaGithub className="text-base" /> View on GitHub
                  </a>
                )}

                <ul className="space-y-3">
                  {projects[activeProject].description.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "#B8B8B8" }}>
                      <span className="mt-1 flex-shrink-0" style={{ color: "#D97A43" }}>▸</span>
                      <span>{point}</span>
                    </li>
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
