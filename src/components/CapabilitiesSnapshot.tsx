import React from "react";

const CapabilitiesSnapshot: React.FC = () => {
  const capabilities = [
    {
      id: "adaptive-portfolio",
      title: "Adaptive Portfolio Management",
      description:
        "Portfolios evolve in real time using AI and behavioral insights to align with your goals, risk, and life changes.",
      image: "/capabilities/captest.jpg",
    },
    {
      id: "goal-oriented",
      title: "Goal-Oriented Wealth Planning",
      description:
        "Investments are tailored to your personal milestones, like buying a home, retirement, or career transitions.",
      image: "/capabilities/captest.jpg",
    },
    {
      id: "explainable-ai",
      title: "Explainable AI Recommendations",
      description:
        "Every portfolio decision comes with clear, plain-language narratives — so you always understand why changes happen.",
      image: "/capabilities/captest.jpg",
    },
    {
      id: "cross-border",
      title: "Cross-Border and Multi-Asset Integration",
      description:
        "Seamlessly manage diversified portfolios across markets, asset classes, and currencies with tax-optimized strategies.",
      image: "/capabilities/captest.jpg",
    },
  ];

  return (
    <section
      id="capabilities"
      className="w-full min-h-screen bg-[#082159] flex items-center justify-center"
    >
      <div className="w-full max-w-7xl px-6 py-10 md:py-20">
        {/* Heading + Subtext */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight mb-3 font-satoshi font-satoshi text-left">
            Capabilities Snapshot
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            Singari's adaptive systems integrate intelligence, clarity, and
            personalization — so your investments evolve in sync with you.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
          {/* Row 1 */}
          <div className="bg-white rounded-[1.5rem] p-8 flex flex-col justify-center h-[200px]">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-3 font-satoshi">
              {capabilities[0].title}
            </h3>
            <p className="text-black/80 leading-relaxed">
              {capabilities[0].description}
            </p>
          </div>
          <div className="h-[200px] rounded-[1.5rem] overflow-hidden">
            <img
              src={capabilities[0].image}
              alt={capabilities[0].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2 */}
          <div className="h-[200px] rounded-[1.5rem] overflow-hidden">
            <img
              src={capabilities[1].image}
              alt={capabilities[1].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-[1.5rem] p-8 flex flex-col justify-center h-[200px]">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-3 font-satoshi">
              {capabilities[1].title}
            </h3>
            <p className="text-black/80 leading-relaxed">
              {capabilities[1].description}
            </p>
          </div>

          {/* Row 3 */}
          <div className="bg-white rounded-[1.5rem] p-8 flex flex-col justify-center h-[200px]">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-3 font-satoshi">
              {capabilities[2].title}
            </h3>
            <p className="text-black/80 leading-relaxed">
              {capabilities[2].description}
            </p>
          </div>
          <div className="h-[200px] rounded-[1.5rem] overflow-hidden">
            <img
              src={capabilities[2].image}
              alt={capabilities[2].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 4 */}
          <div className="h-[200px] rounded-[1.5rem] overflow-hidden">
            <img
              src={capabilities[3].image}
              alt={capabilities[3].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-[1.5rem] p-8 flex flex-col justify-center h-[200px]">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-3 font-satoshi">
              {capabilities[3].title}
            </h3>
            <p className="text-black/80 leading-relaxed">
              {capabilities[3].description}
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-8 md:hidden">
          {capabilities.map((cap) => (
            <div key={cap.id} className="flex flex-col gap-3">
              <div className="h-48 rounded-[1.5rem] overflow-hidden">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-[1.5rem] p-6 flex flex-col justify-center">
                <h3 className="text-lg font-medium text-black mb-2">
                  {cap.title}
                </h3>
                <p className="text-black/80 leading-relaxed">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSnapshot;
