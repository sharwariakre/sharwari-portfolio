export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center scroll-mt-20 px-8 py-20"
      style={{ background: "#181818" }}
    >
      <div className="max-w-3xl w-full mx-auto">
        <div className="section-heading">
          <p className="section-label">01 / About</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-bar" />
        </div>

        <p className="text-base leading-relaxed mb-5" style={{ color: "#B8B8B8" }}>
          I'm <span className="font-semibold" style={{ color: "#F5F5F5" }}>Sharwari Akre</span>, a Backend Engineer focused on{" "}
          <span className="font-medium" style={{ color: "#D97A43" }}>distributed systems, agentic AI, and LLM applications</span>.
          I enjoy building intelligent systems that do meaningful work — from autonomous voice agents to automated vulnerability patching pipelines.
        </p>

        <p className="text-base leading-relaxed mb-5" style={{ color: "#B8B8B8" }}>
          I hold a <span className="font-medium" style={{ color: "#F5F5F5" }}>Masters Degree in Computer Science</span> from{" "}
          <span className="font-medium" style={{ color: "#F5F5F5" }}>North Carolina State University</span> (GPA 3.73, May 2026). My work sits at the intersection of
          reliable backend engineering and practical AI — systems that are production-ready, not just proof-of-concept.
        </p>

        <p className="text-base leading-relaxed mb-10" style={{ color: "#B8B8B8" }}>
          Outside of engineering, I care about building things that matter.
          My Aria Companion project — an AI voice agent for elderly care — is a direct reflection of that.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          {[
            { label: "Location", value: "Raleigh, NC (Open to Relocation)" },
            { label: "Education", value: "M.S. Computer Science, NC State (May 2026)" },
            { label: "Focus Areas", value: "Backend Systems · Agentic AI · LLM Applications" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#D97A43" }}>{label}</p>
              <p style={{ color: "#B8B8B8" }}>{value}</p>
            </div>
          ))}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#D97A43" }}>Email</p>
            <a
              href="mailto:sharwari.akre@gmail.com"
              style={{ color: "#D97A43" }}
              className="hover:underline"
            >
              sharwari.akre@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
