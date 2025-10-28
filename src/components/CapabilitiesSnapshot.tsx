import React from "react";
import { motion } from "framer-motion";

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
          <motion.h2 
              initial={{ opacity: 0, y: 60, rotate: 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight mb-3 font-satoshi text-left">
            Capabilities<br/><span className="text-[#477fff]">Snapshot</span>
          </motion.h2>
          <motion.p 
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            Singari's adaptive systems integrate intelligence, clarity, and
            personalization — so your investments evolve in sync with you.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
          {/* Row 1 */}
          <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-200 p-8 flex flex-col justify-center h-[200px]">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-3 font-satoshi">
              {capabilities[0].title}
            </h3>
            <p className="text-black/80 leading-relaxed">
              {capabilities[0].description}
            </p>
          </motion.div>
          <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[200px] overflow-hidden">
            <img
              src={capabilities[0].image}
              alt={capabilities[0].title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[200px] overflow-hidden">
            <img
              src={capabilities[1].image}
              alt={capabilities[1].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-100 p-8 flex flex-col justify-center h-[200px]">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-3 font-satoshi">
              {capabilities[1].title}
            </h3>
            <p className="text-black/80 leading-relaxed">
              {capabilities[1].description}
            </p>
          </motion.div>

          {/* Row 3 */}
          <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-200 p-8 flex flex-col justify-center h-[200px]">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-3 font-satoshi">
              {capabilities[2].title}
            </h3>
            <p className="text-black/80 leading-relaxed">
              {capabilities[2].description}
            </p>
          </motion.div>
          <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[200px] overflow-hidden">
            <img
              src={capabilities[2].image}
              alt={capabilities[2].title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Row 4 */}
          <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[200px] overflow-hidden">
            <img
              src={capabilities[3].image}
              alt={capabilities[3].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-100 p-8 flex flex-col justify-center h-[200px]">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-3 font-satoshi">
              {capabilities[3].title}
            </h3>
            <p className="text-black/80 leading-relaxed">
              {capabilities[3].description}
            </p>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-8 md:hidden">
          {capabilities.map((cap) => (
            <motion.div
            key={cap.id} 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-3">
              <div className="h-48 overflow-hidden">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 p-6 flex flex-col justify-center">
                <h3 className="text-lg font-medium text-black mb-2">
                  {cap.title}
                </h3>
                <p className="text-black/80 leading-relaxed">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSnapshot;
