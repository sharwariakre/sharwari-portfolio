import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "HOME", "ABOUT", "EXPERIENCE", "EDUCATION",
    "SKILLS", "PROJECTS", "PUBLICATIONS", "CERTIFICATIONS",
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex text-white fixed left-0 top-0 h-screen w-1/5 flex-col items-center z-10 py-10"
        style={{ background: "#8B4A2B" }}
      >
        {/* Profile Image — subtle shadow, thin ring */}
        <div
          className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mb-4"
          style={{ boxShadow: "0 0 0 1.5px rgba(255,255,255,0.18), 0 8px 32px rgba(0,0,0,0.4)" }}
        >
          <img src={profile} alt="Sharwari Akre" className="object-cover w-full h-full" />
        </div>

        {/* Name */}
        <p className="font-bold text-base text-white mb-0.5">Sharwari Akre</p>
        {/* Role — warm accent on the terracotta bg */}
        <p className="text-xs mb-6" style={{ color: "#FFD4A8" }}>Software Engineer</p>

        {/* Divider */}
        <div className="w-8 h-px mb-7" style={{ background: "rgba(255,255,255,0.18)" }} />

        {/* Nav Links — tighter, less tracking */}
        <nav className="flex flex-col gap-4 text-center flex-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-semibold tracking-wider transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.65)" }}
              onMouseEnter={e => (e.target.style.color = "#fff")}
              onMouseLeave={e => (e.target.style.color = "rgba(255,255,255,0.65)")}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
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
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              className="transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile Navbar */}
      <header
        className="md:hidden text-white flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 z-20 shadow-lg"
        style={{ background: "#8B4A2B" }}
      >
        <div>
          <span className="text-sm font-bold">Sharwari Akre</span>
          <span className="text-xs ml-2" style={{ color: "#FFD4A8" }}>Backend Engineer</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden fixed top-[56px] left-0 w-full text-white flex flex-col items-center py-5 gap-4 z-10 shadow-lg"
          style={{ background: "#8B4A2B" }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-[11px] font-semibold tracking-wider transition-colors"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
