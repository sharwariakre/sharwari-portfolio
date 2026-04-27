import { FaExternalLinkAlt } from "react-icons/fa";

export default function Publications() {
  return (
    <section
      id="publications"
      className="min-h-[60vh] px-8 md:px-20 py-20 flex flex-col justify-center"
      style={{ background: "#121212" }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="section-heading">
          <p className="section-label">06 / Research</p>
          <h2 className="section-title">Publications</h2>
          <div className="section-bar" />
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#555" }}>2023</p>
          <h3 className="text-lg font-bold mb-1 leading-snug" style={{ color: "#F5F5F5" }}>
            Decentralized Blockchain-Based Pharma Supply Chain for Drug Traceability
          </h3>
          <p className="text-sm font-medium mb-1" style={{ color: "#D97A43" }}>
            International Journal of Electrical, Electronics and Computer Systems (IJEECS)
          </p>
          <p className="text-xs mb-4 italic" style={{ color: "#555" }}>
            Peer-reviewed journal publication on blockchain-based pharmaceutical supply chain architecture
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://ijeecs.iaescore.com/index.php/IJEECS/article/view/34285"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
              style={{ color: "#D97A43" }}
            >
              View Journal Publication <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href="https://www.researchgate.net/publication/377340047_Blockchain_based_drug_supply_chain_for_decentralized_network"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm hover:underline transition-colors"
              style={{ color: "#6B6B6B" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#D97A43")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6B6B6B")}
            >
              ResearchGate <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
