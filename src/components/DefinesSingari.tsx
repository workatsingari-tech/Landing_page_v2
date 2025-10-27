import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 'ethical',
    title: 'Ethical and Community-Driven',
    description: 'Safe, anonymized insights that improve recommendations for everyone.',
    bgColor: 'bg-[#979BE2]',
  },
  {
    id: 'empowerment',
    title: 'Empowerment Through Clarity',
    description: 'Simple, gamified guidance to make you confident financial decisions.',
    bgColor: 'bg-[#3B4686]',
  },
  {
    id: 'human-centric',
    title: 'Human-Centric Intelligence',
    description: 'AI and behavioral insights that create portfolios tailored to you.',
    bgColor: 'bg-[#082159]',
  },
  {
    id: 'transparency',
    title: 'Transparency and Trust',
    description: 'Clear, easy to understand explanations for every recommendation.',
    bgColor: 'bg-[#3B4686]',
  },
  {
    id: 'adaptive',
    title: 'Adaptive and Proactive',
    description: 'Portfolios evolve in real time with markets and life changes.',
    bgColor: 'bg-[#979BE2]',
  },
];

const DefinesSingari: React.FC = () => {
  return (
    <section id='about' className="w-full pt-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-satoshi font-normal mb-10 md:mb-16 text-[#1D1D1F] text-center md:text-left">
          What defines Singari?
        </h2>

        {/* MOBILE */}
        <div className="grid grid-cols-1 gap-6 sm:hidden">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} rounded-[1.5rem] p-6 text-white min-h-[280px] flex flex-col justify-between`}
            >
              <h3 className="text-2xl font-semibold mb-4 w-[80%] font-satoshi">{card.title}</h3>
              <p className="text-white/90 text-lg leading-relaxed text-right ml-auto">{card.description}</p>
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:flex max-w-7xl mx-auto w-full">
          <div className="flex w-full h-[450px] -space-x-10">
            <motion.div
              className="bg-[#979BE2] w-[400px] h-[400px] p-6 flex flex-col justify-between rounded-[1.5rem] text-white z-10 -rotate-6 translate-y-16 hover:z-40 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-[28px] font-satoshi leading-tight">Ethical and Community-Driven</h3>
              <p className="text-white/90 text-lg leading-relaxed font-light text-right">
                Safe, anonymized insights that improve recommendations for everyone.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#3B4686] w-[400px] h-[400px] p-8 flex flex-col justify-between rounded-[1.5rem] text-white z-20 -rotate-2 translate-y-6 hover:z-40 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-[28px] font-satoshi leading-tight">Empowerment Through Clarity</h3>
              <p className="text-white/90 text-lg leading-relaxed font-light text-right">
                Simple, gamified guidance to make you confident financial decisions.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#082159] w-[400px] h-[400px] p-8 flex flex-col justify-between rounded-[1.5rem] text-white z-30 hover:z-40 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-[28px] font-satoshi leading-tight text-right">Human-Centric Intelligence</h3>
              <p className="text-white/90 text-lg leading-relaxed font-light">
                AI and behavioral insights that create portfolios tailored to you.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#3B4686] w-[400px] h-[400px] p-8 flex flex-col justify-between rounded-[1.5rem] text-white z-20 rotate-2 translate-y-6 hover:z-40 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-[28px] font-satoshi leading-tight text-right">Transparency and Trust</h3>
              <p className="text-white/90 text-lg leading-relaxed font-light">
                Clear, easy to understand explanations for every recommendation.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#979BE2] w-[400px] h-[400px] p-8 flex flex-col justify-between rounded-[1.5rem] text-white z-10 rotate-6 translate-y-16 hover:z-40 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-[28px] font-satoshi leading-tight text-right">Adaptive and Proactive</h3>
              <p className="text-white/90 text-lg leading-relaxed font-light">
                Portfolios evolve in real time with markets and life changes.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DefinesSingari;
