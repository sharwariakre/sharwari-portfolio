export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-gray-50 text-gray-900 px-8 md:px-20 py-20 flex flex-col justify-start"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#b5542b]">
          Education
        </h2>

        <div className="space-y-10">
          {/* NC STATE */}
          <div className="border-l-4 border-[#b5542b] pl-6">
            <h3 className="text-2xl font-semibold">
              North Carolina State University
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Raleigh, NC · 2023 – 2025
            </p>
            <p className="text-gray-700 mb-2">
              Master of Science in Computer Science
            </p>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
              <li>Focused on Software Engineering and Cloud Systems</li>
              
            </ul>
          </div>

          {/* PUNE UNIVERSITY */}
          <div className="border-l-4 border-[#b5542b] pl-6">
            <h3 className="text-2xl font-semibold">
              Savitribai Phule Pune University
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Pune, India · 2019 – 2023
            </p>
            <p className="text-gray-700 mb-2">
              Bachelor of Engineering in Computer Science
            </p>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
              <li>Graduated with Distinction</li>
              <li>Active Member, ACM Student Chapter</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
