import React from 'react';
import ScrollReveal from './ScrollReveal';

const InvestmentPhilosophy: React.FC = () => {
  return (
    <section className="w-full bg-white py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#D4CFED] px-5 py-2 rounded-full">
            <span className="text-[#5227FF] font-medium text-xs uppercase tracking-wider">
              Investment Philosophy
            </span>
          </div>
        </div>

        {/* Scroll Reveal Text */}
        <div className="flex justify-center">
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0.15}
            baseRotation={2}
            blurStrength={5}
            containerClassName="max-w-[1000px]"
            textClassName="text-center text-3xl md:text-4xl lg:text-[2.75rem] leading-relaxed text-[#86868B] font-normal"
            rotationEnd="bottom bottom"
            wordAnimationEnd="bottom bottom"
          >
            At Singari, investing adapts to your life. Our AI combines behavioral insights and real-time market intelligence to create portfolios that evolve with your goals. We simplify complexity, provide clear guidance, and empower you to grow wealth confidently and intentionally.
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
