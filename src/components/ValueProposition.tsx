"use client";
import React from "react";
import { motion } from "framer-motion";

const ValueProposition: React.FC = () => {
  const features = [
    {
      id: "adaptive-portfolios",
      title: "Adaptive Portfolios in Real Time",
      description:
        "Your investments evolve automatically based on market trends, personal goals, and cash flow changes — keeping your wealth aligned with your life.",
      icon: "/valueIcons/ChartLineUp.svg",
      bgColor: "bg-gray-200",
    },
    {
      id: "ai-understands",
      title: "AI That Understands You",
      description:
        "Singari's behavioral and financial AI personalizes recommendations for your unique 'financial genome,' making investing truly yours.",
      icon: "/valueIcons/HeadCircuit.svg",
      bgColor: "bg-gray-100",
    },
    {
      id: "human-friendly",
      title: "Clear, Human-Friendly Insights",
      description:
        "Every portfolio change comes with easy-to-understand AI-generated explanations — no jargon, no confusion.",
      icon: "/valueIcons/ChatCenteredText.svg",
      bgColor: "bg-gray-100",
    },
    {
      id: "trustworthy-guidance",
      title: "Smart, Trustworthy Guidance",
      description:
        "From market volatility to long-term planning, Singari provides proactive suggestions and nudges, so you can invest confidently and stress-free.",
      icon: "/valueIcons/CompassRose.svg",
      bgColor: "bg-gray-200",
    },
  ];

  return (
    <section
      id="value"
      className="w-full min-h-screen py-10 md:py-20 px-6 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-satoshi font-medium mb-10 text-black text-center md:text-left"
        >
          Value <span className="text-[#082159]">Proposition</span>
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 max-w-6xl mx-auto">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 60 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className={`${feature.bgColor} rounded-[1.5rem] p-6 flex flex-col min-h-[250px] cursor-default`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-3xl font-satoshi w-2/3 md:w-1/2 font-normal leading-snug text-black">
                  {feature.title}
                </h3>
                <div className="flex-shrink-0">
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-10 h-10 opacity-80"
                    draggable={false}
                  />
                </div>
              </div>
              <p className="text-[#6E6E73] text-sm md:text-base leading-relaxed font-normal mt-auto w-[85%]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
