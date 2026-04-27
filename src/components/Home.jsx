import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function TerminalCard() {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center">
      <div className="relative">
        {/* Ambient glow */}
        <div
          className="absolute -inset-6 rounded-3xl blur-3xl pointer-events-none"
          style={{ background: "rgba(217,122,67,0.07)" }}
        />

        {/* Terminal window */}
        <div
          className="relative rounded-xl overflow-hidden w-[360px] shadow-2xl"
          style={{ background: "#181818", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: "#141414", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,46,0.7)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(39,201,63,0.7)" }} />
            </div>
            <span className="text-xs ml-2 font-mono" style={{ color: "#555" }}>~/sharwari/profile.json</span>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-xs leading-relaxed space-y-0.5">
            <p><span style={{ color: "#D97A43" }}>❯</span> <span style={{ color: "#6B6B6B" }}>cat profile.json</span></p>
            <p className="pt-1" style={{ color: "#555" }}>{"{"}</p>
            <p className="pl-4">
              <span style={{ color: "#D97A43" }}>"role"</span>
              <span style={{ color: "#555" }}>: </span>
              <span style={{ color: "#7EC8A4" }}>"Software Engineer"</span>
              <span style={{ color: "#555" }}>,</span>
            </p>
            <p className="pl-4">
              <span style={{ color: "#D97A43" }}>"stack"</span>
              <span style={{ color: "#555" }}>: [</span>
            </p>
            <p className="pl-8"><span style={{ color: "#7EC8A4" }}>"Python"</span><span style={{ color: "#555" }}>, </span><span style={{ color: "#7EC8A4" }}>"Node.js"</span><span style={{ color: "#555" }}>, </span><span style={{ color: "#7EC8A4" }}>"FastAPI"</span></p>
            <p className="pl-4" style={{ color: "#555" }}>],</p>
            <p className="pl-4">
              <span style={{ color: "#D97A43" }}>"systems"</span>
              <span style={{ color: "#555" }}>: [</span>
            </p>
            <p className="pl-8"><span style={{ color: "#7EB8D4" }}>"Distributed Systems"</span><span style={{ color: "#555" }}>,</span></p>
            <p className="pl-8"><span style={{ color: "#7EB8D4" }}>"LLM Applications"</span><span style={{ color: "#555" }}>,</span></p>
            <p className="pl-8"><span style={{ color: "#7EB8D4" }}>"Cloud Infrastructure"</span></p>
            <p className="pl-4" style={{ color: "#555" }}>],</p>
            <p className="pl-4">
              <span style={{ color: "#D97A43" }}>"education"</span>
              <span style={{ color: "#555" }}>: </span>
              <span style={{ color: "#7EC8A4" }}>"MS CS · NC State"</span>
              <span style={{ color: "#555" }}>,</span>
            </p>
            <p className="pl-4">
              <span style={{ color: "#D97A43" }}>"gpa"</span>
              <span style={{ color: "#555" }}>: </span>
              <span style={{ color: "#D4A76A" }}>3.67</span>
              <span style={{ color: "#555" }}>,</span>
            </p>
            <p className="pl-4">
              <span style={{ color: "#D97A43" }}>"certified"</span>
              <span style={{ color: "#555" }}>: </span>
              <span style={{ color: "#7EC8A4" }}>"AWS CCP"</span>
            </p>
            <p style={{ color: "#555" }}>{"}"}</p>
            <p className="pt-2 flex items-center gap-1">
              <span style={{ color: "#D97A43" }}>❯</span>
              <span
                className="inline-block w-1.5 h-3.5 rounded-sm animate-pulse"
                style={{ background: "#D97A43", opacity: 0.8 }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="w-full min-h-screen flex items-center px-10 md:px-14 py-16 relative overflow-hidden"
      style={{ background: "#121212" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 15% 50%, rgba(139,74,43,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 20%, rgba(217,122,67,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative w-full flex items-center gap-10">
        {/* Left — text content */}
        <div className="flex-1 max-w-xl">
          {/* Label */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-5 h-px" style={{ background: "#D97A43" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D97A43" }}>
              Hi there, I'm
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-6xl font-black leading-none tracking-tight mb-4"
            style={{ color: "#F5F5F5" }}
          >
            Sharwari
            <br />
            <span style={{ color: "#D97A43" }}>Akre</span>
          </h1>

          {/* Headline */}
          <p className="text-base leading-relaxed mb-8 max-w-sm" style={{ color: "#B8B8B8" }}>
            Software Engineer building{" "}
            <span style={{ color: "#F5F5F5" }}>scalable systems</span> and{" "}
            <span style={{ color: "#F5F5F5" }}>intelligent developer tools</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="/Sharwari_Akre_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{ background: "#D97A43" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#C46A35")}
              onMouseLeave={e => (e.currentTarget.style.background = "#D97A43")}
            >
              View Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#B8B8B8" }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(217,122,67,0.5)";
                e.currentTarget.style.color = "#D97A43";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "#B8B8B8";
              }}
            >
              See Projects
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-5 text-lg" style={{ color: "#555" }}>
            {[
              { href: "mailto:sharwari.akre@gmail.com", icon: <FaEnvelope />, label: "Email" },
              { href: "https://github.com/sharwariakre", icon: <FaGithub />, label: "GitHub" },
              { href: "https://linkedin.com/in/sharwari-akre", icon: <FaLinkedin />, label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                title={label}
                style={{ color: "#555" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#D97A43")}
                onMouseLeave={e => (e.currentTarget.style.color = "#555")}
                className="transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — terminal card */}
        <TerminalCard />
      </div>
    </main>
  );
}
