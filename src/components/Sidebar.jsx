import profile from "../assets/profile.jpg"; // your image

export default function Sidebar() {
  return (
    <aside
      className="
        bg-[#b5542b] 
        text-white 
        w-full md:w-1/4 lg:w-1/5 
        flex flex-col 
        justify-center items-center 
        py-10 
        md:min-h-screen
      "
    >
      {/* Profile Image */}
<div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mb-8 bg-[#b5542b] flex items-center justify-center">
<img
  src={profile}
  alt="Sharwari Akre"
  className="object-contain w-full h-full scale-110"
 />

</div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-6 text-sm font-semibold tracking-wide">
        {[
          "ABOUT",
          "EXPERIENCE",
          "EDUCATION",
          "SKILLS",
          "INTERESTS",
          "PUBLICATIONS",
          "CONTACT",
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
