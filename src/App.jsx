import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // ✅ add to <html>
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-50 dark:bg-gray-800 shadow">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Sharwari Akre
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded-md bg-blue-600 text-white dark:bg-blue-400 hover:opacity-90"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Hello World
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Toggle the button to switch themes!
        </p>
      </main>
    </div>
  );
}
