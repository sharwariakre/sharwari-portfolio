// src/components/Publications.jsx
export default function Publications() {
  return (
    <section
      id="publications"
      className="min-h-screen bg-gray-50 text-gray-900 pl-8 pr-8 md:pl-20 md:pr-20 py-20 flex flex-col justify-start"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#b5542b]">Publications</h2>

        <div className="border-l-4 border-[#b5542b] pl-6">
          <h3 className="text-2xl font-semibold mb-1">
            Decentralized Blockchain-Based Pharma Supply Chain for Drug Traceability
          </h3>
          <p className="text-gray-700 italic mb-2">
            International Journal of Electrical, Electronics and Computer Systems (IJEEC), 2023
          </p>
          <div className="space-x-4">
            <a
              href="https://ijeecs.iaescore.com/index.php/IJEECS/article/view/34285"
              target="_blank"
              className="text-[#b5542b] hover:underline font-medium"
            >
              View Journal Publication ↗
            </a>
            <a
              href="https://www.researchgate.net/publication/377340047_Blockchain_based_drug_supply_chain_for_decentralized_network"
              target="_blank"
              className="text-gray-600 hover:text-[#b5542b] hover:underline"
            >
              Also available on ResearchGate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
