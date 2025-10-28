import { useState } from "react";
import { Menu, X } from "lucide-react";
import profile from "../assets/profile.jpg";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT",
    "EXPERIENCE",
    "EDUCATION",
    "SKILLS",
    "PROJECTS",
    "PUBLICATIONS"
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex bg-[#b5542b] text-white fixed left-0 top-0 h-screen w-1/5 flex-col justify-center items-center z-10">
        {/* Profile Image */}
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white mb-8">
          <img src={profile} alt="Sharwari Akre" className="object-cover w-full h-full" />
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col space-y-6 text-sm font-semibold tracking-wide text-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-200 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Navbar */}
      <header className="md:hidden bg-[#b5542b] text-white flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 z-20 shadow-md">
        <h1 className="text-lg font-bold">Sharwari Akre</h1>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-[#b5542b] text-white flex flex-col items-center py-6 space-y-4 z-10 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold tracking-wide hover:text-gray-200 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
