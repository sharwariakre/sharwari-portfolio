export default function Experience() {
  const jobs = [
    {
      company: "Trust2Connect",
      title: "Product Engineering Intern",
      period: "May 2025 – Jul 2025",
      bullets: [
        <>Eliminated API timeout issues under peak load and <strong style={{ color: "#F5F5F5" }}>reduced latency by 40%</strong> by identifying and resolving connection-per-query bottlenecks via connection pooling.</>,
        <>Achieved <strong style={{ color: "#F5F5F5" }}>sub-200 ms notification latency</strong> by designing and deploying a Pub/Sub-based communication system.</>,
        <>Enabled scalable, secure document storage across <strong style={{ color: "#F5F5F5" }}>10+ microservices</strong> using GCP Storage and AlloyDB (PostgreSQL).</>,
        <>Deployed application services to a <strong style={{ color: "#F5F5F5" }}>Kubernetes</strong>-based dev environment, enabling consistent team rollouts.</>,
        <>Standardized API contracts using <strong style={{ color: "#F5F5F5" }}>Apigee</strong>-integrated REST endpoints and OpenAPI/Swagger specs; engineered <strong style={{ color: "#F5F5F5" }}>React</strong> components to surface the APIs on the frontend.</>,
      ],
    },
    {
      company: "Capgemini",
      title: "Software Developer Trainee",
      period: "Dec 2023 – Jul 2024",
      bullets: [
        <>Applied indexing strategies and query optimization to improve <strong style={{ color: "#F5F5F5" }}>SQL and PL/SQL</strong> performance.</>,
        <>Automated <strong style={{ color: "#F5F5F5" }}>UNIX-based file operations</strong> and logging workflows, reducing error rates and manual intervention.</>,
        <>Collaborated on <strong style={{ color: "#F5F5F5" }}>5+ dashboards</strong> using <strong style={{ color: "#F5F5F5" }}>Power BI and Tableau</strong>, enabling real-time KPI tracking across business units.</>,
      ],
    },
    {
      company: "PayInfra",
      title: "Web Developer Intern",
      period: "Nov 2021 – Jan 2022",
      bullets: [
        <>Developed and deployed a <strong style={{ color: "#F5F5F5" }}>MERN-based payment gateway platform</strong> supporting 100+ daily test transactions and client integrations.</>,
        <>Integrated <strong style={{ color: "#F5F5F5" }}>Solidity smart contracts</strong> for secure automated settlements.</>,
        <>Translated Figma wireframes into responsive, user-friendly web interfaces for improved UX.</>,
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-8 md:px-20 py-20"
      style={{ background: "#121212" }}
    >
      <div className="max-w-3xl w-full">
        <div className="section-heading">
          <p className="section-label">02 / Career</p>
          <h2 className="section-title">Experience</h2>
          <div className="section-bar" />
        </div>

        <div className="space-y-12">
          {jobs.map((job) => (
            <div key={job.company} className="timeline-item">
              <div className="timeline-dot" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "#F5F5F5" }}>{job.company}</h3>
                  <p className="text-sm font-semibold" style={{ color: "#D97A43" }}>{job.title}</p>
                </div>
                <span className="text-xs font-medium whitespace-nowrap" style={{ color: "#555" }}>{job.period}</span>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "#B8B8B8" }}>
                    <span className="mt-1 flex-shrink-0" style={{ color: "#D97A43" }}>▸</span>
                    <span>{bullet}</span>
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
