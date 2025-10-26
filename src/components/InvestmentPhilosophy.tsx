import React from 'react';
import ScrollReveal from './ScrollReveal';

const InvestmentPhilosophy: React.FC = () => {
  return (
    <section id='philosophy' className="w-full min-h-screen flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">
      <div 
            className="inline-flex items-center px-6 py-2 rounded-full mb-2"
            style={{
              background: 'linear-gradient(205.82deg, #FBFBFE 16.3%, #F1F0FB 86.48%)',
              border: '0.5px solid #F1F2F9',
              boxShadow: 'inset 0px -1px 2.5px rgba(190, 186, 233, 0.25), inset 0px 2px 2px rgba(255, 255, 255, 0.77)',
              borderRadius: '200px'
            }}
          >
            <span className="text-gray-700 text-sm tracking-wide">Investment Philosophy</span>
          </div>
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
