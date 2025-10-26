import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CapabilitiesSnapshot: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            cardsRef.current.forEach((card, index) => {
              if (!card) return;

              gsap.fromTo(
                card,
                {
                  opacity: 0,
                  y: 60,
                  scale: 0.95
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: 'power3.out',
                  delay: index * 0.15
                }
              );
            });
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[2.25rem] font-normal mb-10 text-[#1D1D1F]">Capabilities Snapshot</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Card 1: Adaptive Portfolio Management */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-[#5B699D] rounded-[1.5rem] p-9 flex flex-col justify-between opacity-0 transition-transform duration-300 hover:scale-[1.01]"
            style={{ minHeight: '300px' }}
          >
            <div className="flex items-center justify-center mb-6">
              <svg className="w-full max-w-md h-40" viewBox="0 0 540 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Axes */}
                <line x1="45" y1="160" x2="495" y2="160" stroke="white" strokeWidth="2.5" opacity="0.4"/>
                <line x1="45" y1="30" x2="45" y2="160" stroke="white" strokeWidth="2.5" opacity="0.4"/>
                
                {/* Bar chart */}
                <rect x="85" y="100" width="55" height="60" fill="#B8BDE8" rx="2"/>
                <rect x="170" y="45" width="55" height="115" fill="#B8BDE8" rx="2"/>
                <rect x="255" y="75" width="55" height="85" fill="#B8BDE8" rx="2"/>
                <rect x="340" y="115" width="55" height="45" fill="#B8BDE8" rx="2"/>
                <rect x="425" y="60" width="55" height="100" fill="#B8BDE8" rx="2"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[1.15rem] font-semibold mb-2 text-white leading-tight">
                Adaptive Portfolio Management:
              </h3>
              <p className="text-white/90 text-[0.95rem] leading-relaxed font-light">
                Portfolios evolve in real time using AI and behavioral insights to align with your goals, risk, and life changes.
              </p>
            </div>
          </div>

          {/* Card 2: Explainable AI Recommendations */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-[#0B1F3D] rounded-[1.5rem] p-9 flex flex-col justify-between opacity-0 transition-transform duration-300 hover:scale-[1.01]"
            style={{ minHeight: '300px' }}
          >
            <div className="flex items-center justify-center mb-6">
              <svg className="w-full max-w-md h-40" viewBox="0 0 540 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Database cylinders */}
                <ellipse cx="100" cy="45" rx="60" ry="28" fill="#B8BDE8"/>
                <ellipse cx="100" cy="95" rx="60" ry="28" fill="#B8BDE8"/>
                <ellipse cx="100" cy="145" rx="60" ry="28" fill="#B8BDE8"/>
                
                {/* Processing blocks */}
                <rect x="200" y="60" width="110" height="32" fill="#485881" rx="2"/>
                <rect x="200" y="110" width="110" height="32" fill="#485881" rx="2"/>
                
                {/* Output triangles */}
                <path d="M350 85 L390 68 L390 102 Z" fill="#B8BDE8"/>
                <path d="M405 85 L445 68 L445 102 Z" fill="#B8BDE8"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[1.15rem] font-semibold mb-2 text-white leading-tight">
                Explainable AI Recommendations:
              </h3>
              <p className="text-white/90 text-[0.95rem] leading-relaxed font-light">
                Every portfolio decision comes with clear, plain-language narratives — so you always understand why changes happen.
              </p>
            </div>
          </div>

          {/* Card 3: Goal-Oriented Wealth Planning */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-[#8E95CA] rounded-[1.5rem] p-9 flex flex-col justify-between opacity-0 transition-transform duration-300 hover:scale-[1.01]"
            style={{ minHeight: '300px' }}
          >
            <div className="flex items-center justify-center mb-6">
              <svg className="w-full max-w-md h-40" viewBox="0 0 540 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background triangle */}
                <path d="M80 165 L240 50 L400 165 Z" fill="#6B78A8" opacity="0.45"/>
                
                {/* Foreground shapes */}
                <ellipse cx="350" cy="135" rx="75" ry="40" fill="#DDE2F5"/>
                <rect x="315" y="135" width="70" height="50" fill="#7681B5" rx="2"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[1.15rem] font-semibold mb-2 text-white leading-tight">
                Goal-Oriented Wealth Planning:
              </h3>
              <p className="text-white/90 text-[0.95rem] leading-relaxed font-light">
                Investments are tailored to your personal milestones like buying a home, retirement, or career transitions.
              </p>
            </div>
          </div>

          {/* Card 4: Cross-Border and Multi-Asset Integration */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="bg-[#A2A8D8] rounded-[1.5rem] p-9 flex flex-col justify-between opacity-0 transition-transform duration-300 hover:scale-[1.01]"
            style={{ minHeight: '300px' }}
          >
            <div className="flex items-center justify-center mb-6">
              <svg className="w-full max-w-md h-40" viewBox="0 0 540 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Pie chart segments */}
                <path d="M270 30 L355 125 Q332 152 270 152 L270 30 Z" fill="#6B78A8"/>
                <path d="M270 30 L185 125 Q208 152 270 152 L270 30 Z" fill="#485881"/>
                <path d="M270 30 Q318 35 342 73 Q352 92 342 125 L270 30 Z" fill="#0B1F3D"/>
                
                {/* White accent */}
                <ellipse cx="170" cy="100" rx="48" ry="28" fill="white" opacity="0.85" transform="rotate(-30 170 100)"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[1.15rem] font-semibold mb-2 text-white leading-tight">
                Cross-Border and Multi-Asset Integration:
              </h3>
              <p className="text-white/90 text-[0.95rem] leading-relaxed font-light">
                Seamlessly manage diversified portfolios across markets, asset classes, and currencies with tax-optimized strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSnapshot;
