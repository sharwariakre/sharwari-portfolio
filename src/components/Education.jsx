export default function Education() {
  const schools = [
    {
      name: "North Carolina State University",
      location: "Raleigh, NC",
      degree: "Master of Science in Computer Science",
      period: "Aug 2024 – May 2026",
      gpa: "3.67 / 4.0",
      details: ["Focused on Software Engineering, Cloud Systems, and Applied ML"],
    },
    {
      name: "Marathwada Mitra Mandal's College of Engineering",
      location: "Pune, India",
      degree: "Bachelor of Engineering in Information Technology",
      period: "Jul 2019 – May 2023",
      gpa: "3.8 / 4.0",
      details: ["Graduated with Distinction", "Active Member, ACM Student Chapter"],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen px-8 md:px-20 py-20 flex flex-col justify-center"
      style={{ background: "#181818" }}
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="section-heading">
          <p className="section-label">03 / Background</p>
          <h2 className="section-title">Education</h2>
          <div className="section-bar" />
        </div>

        <div className="space-y-12">
          {schools.map((school) => (
            <div key={school.name} className="timeline-item" style={{ borderLeftColor: "rgba(255,255,255,0.08)" }}>
              <div className="timeline-dot" style={{ boxShadow: "0 0 0 3px #181818" }} />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "#F5F5F5" }}>{school.name}</h3>
                  <p className="text-xs mt-0.5" style={{ color: "#555" }}>{school.location}</p>
                </div>
                <span className="text-xs font-medium whitespace-nowrap" style={{ color: "#555" }}>{school.period}</span>
              </div>
              <p className="text-sm font-semibold mb-1" style={{ color: "#D97A43" }}>{school.degree}</p>
              <p className="text-xs mb-3" style={{ color: "#555" }}>GPA: {school.gpa}</p>
              <ul className="space-y-1">
                {school.details.map((d, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "#B8B8B8" }}>
                    <span className="mt-0.5 flex-shrink-0" style={{ color: "#D97A43" }}>▸</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
