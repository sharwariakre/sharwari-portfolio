import { FaAws, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-[50vh] px-8 md:px-20 py-20 flex flex-col justify-center"
      style={{ background: "#181818" }}
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="section-heading">
          <p className="section-label">07 / Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <div className="section-bar" />
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" style={{ boxShadow: "0 0 0 3px #181818" }} />
          <div className="flex items-start gap-5">
            <div
              className="p-3 rounded-xl flex-shrink-0"
              style={{ background: "rgba(255,153,0,0.08)", border: "1px solid rgba(255,153,0,0.15)" }}
            >
              <FaAws style={{ color: "#FF9900", fontSize: "1.75rem" }} />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ color: "#F5F5F5" }}>
                AWS Certified Cloud Practitioner (CCP)
              </h3>
              <p className="text-sm font-semibold" style={{ color: "#D97A43" }}>Amazon Web Services · 2026</p>
              <a
                href="https://www.credly.com/earner/earned/badge/ab45d761-0a1a-4613-9367-7f896bc29cd9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm mt-2 font-medium transition-colors"
                style={{ color: "#6B6B6B" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#D97A43")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6B6B6B")}
              >
                View Badge <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
