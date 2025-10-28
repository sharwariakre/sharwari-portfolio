// src/components/Experience.jsx
export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 px-8 md:px-20 py-20"
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-8 text-[#b5542b]">
          Experience
        </h2>

        <div className="space-y-10">
          {/* TRUST2CONNECT */}
          <div className="border-l-4 border-[#b5542b] pl-6">
            <h3 className="text-2xl font-semibold">Trust2Connect</h3>
            <p className="text-gray-600 text-sm mb-2">
              Product Engineering Intern · May 2025 – Jul 2025
            </p>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
              <li>
                Engineered backend development across 10+ microservices,
                designing and managing RESTful APIs with
                <span className="font-medium text-gray-800">
                  {" "}Apigee, Postman, and JMeter
                </span>{" "}
                while troubleshooting integration issues in an agile setting.
              </li>
              <li>
                Designed and deployed a distributed Pub/Sub notification system
                with &lt;200ms delivery time, enabling real-time, fault-tolerant
                communication between services.
              </li>
              <li>
                Contributed to ML-driven KYB scoring logic, integrating
                risk-based factors into production-ready workflows for improved
                fraud detection.
              </li>
              <li>
                Containerized and deployed services with
                <span className="font-medium text-gray-800">
                  {" "}Docker + Kubernetes
                </span>, supporting CI/CD pipelines and DevOps release cycles.
              </li>
            </ul>
          </div>

          {/* CAPGEMINI */}
          <div className="border-l-4 border-[#b5542b] pl-6">
            <h3 className="text-2xl font-semibold">Capgemini</h3>
            <p className="text-gray-600 text-sm mb-2">
              Software Developer · Dec 2023 – Jul 2024
            </p>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
              <li>
                Optimized
                <span className="font-medium text-gray-800">
                  {" "}Oracle SQL/PLSQL
                </span>{" "}
                queries, cutting report runtimes by 25% and improving
                operational efficiency.
              </li>
              <li>
                Automated UNIX-based file and log operations, improving
                reliability and maintainability of reporting pipelines.
              </li>
              <li>
                Designed interactive dashboards using
                <span className="font-medium text-gray-800">
                  {" "}Power BI and Tableau
                </span>{" "}
                for real-time KPI monitoring and data-informed decisions.
              </li>
            </ul>
          </div>

          {/* PAYINFRA */}
          <div className="border-l-4 border-[#b5542b] pl-6">
            <h3 className="text-2xl font-semibold">PayInfra</h3>
            <p className="text-gray-600 text-sm mb-2">
              Web Developer Intern · Nov 2021 – Jan 2022
            </p>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
              <li>
                Developed and deployed a
                <span className="font-medium text-gray-800">
                  {" "}MERN-based payment gateway platform
                </span>{" "}
                supporting 100+ daily test transactions and client integrations.
              </li>
              <li>
                Integrated
                <span className="font-medium text-gray-800">
                  {" "}Solidity smart contracts
                </span>{" "}
                for secure automated settlements.
              </li>
              <li>
                Translated Figma wireframes into responsive, user-friendly web
                interfaces for improved UX.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
