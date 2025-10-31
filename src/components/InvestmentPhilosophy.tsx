import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const InvestmentPhilosophy: React.FC = () => {
  return (
    <section id='philosophy' className="w-full py-20 h-fit md:h-screen flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">
      <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="inline-flex items-center px-6 py-2 rounded-full mb-2 bg-[#dddfff]">
        <h2 className="text-black text-sm tracking-wide uppercase">Our Investment Philosophy</h2>
      </motion.div>
      <div className="text-center text-black/60 text-[32px] md:text-[48px] leading-[1.2em] font-light font-satoshi">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
        >
      At Singari, investing adapts to your life. Our Al combines behavioral insights and real-time market intelligence to create portfolios that evolve with your goals. We simplify complexity, provide clear guidance, and empower you to grow wealth confidently and intentionally.        </ScrollReveal>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
