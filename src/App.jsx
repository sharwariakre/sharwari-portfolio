export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-50">
        <h1 className="text-2xl font-bold text-blue-600">Sharwari Akre</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {/* Hero / Home Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center flex-grow text-center px-6 py-20"
      >
        <h2 className="text-5xl font-bold text-blue-600 mb-4">
          Hi, I’m Sharwari 👋
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          I’m a Software Developer with experience in React, Node.js, and Cloud technologies.  
          I enjoy building full-stack applications and exploring scalable design systems.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          View My Work
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white py-4 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Sharwari Akre — All rights reserved
      </footer>
    </div>
  );
}
