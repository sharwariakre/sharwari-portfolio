import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function MainContent() {
  return (
    <main className="flex-1 text-gray-900 p-10 md:p-16 flex flex-col justify-center">
      {/* About Section */}
      <section className="max-w-2xl">
        <p className="uppercase text-sm text-gray-500">Hi there! I’m</p>
        <h1 className="text-6xl font-extrabold mb-2">
          Sharwari <span className="text-[#b5542b]">Akre</span>
        </h1>
        <h2 className="text-lg text-gray-600 mb-8">
          Software Developer · Full Stack Engineer · Cloud and Data Enthusiast
        </h2>

        <div className="flex space-x-6 font-semibold text-sm mb-6">

          <a
            href="/Sharwari_Akre_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#b5542b] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#9e4725] transition"
          >
            VIEW RESUME
          </a>

        </div>

        <div className="flex space-x-5 text-2xl text-gray-700">
          <a
            href="mailto:sharwari.akre@gmail.com"
            className="hover:text-[#b5542b] transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/sharwariakre"
            className="hover:text-[#b5542b] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sharwari-akre"
            className="hover:text-[#b5542b] transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </main>
  );
}
