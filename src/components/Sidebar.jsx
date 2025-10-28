import profile from "../assets/profile.jpg"; // your image

export default function Sidebar() {
  return (
    <aside className="bg-[#b5542b] text-white fixed left-0 top-0 h-screen w-full md:w-1/4 lg:w-1/5 flex flex-col justify-center items-center z-10">
      {/* Profile Image */}
      <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white mb-8">
        <img
          src={profile}
          alt="Sharwari Akre"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-6 text-sm font-semibold tracking-wide text-center">
        {[
          "ABOUT",
          "EXPERIENCE",
          "EDUCATION",
          "SKILLS",
          "PROJECTS",
          "PUBLICATIONS",
        ].map((item) => (
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
  );
}
