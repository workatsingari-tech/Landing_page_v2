import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ValueProposition: React.FC = () => {
  const features = [
    {
      id: 'adaptive-portfolios',
      title: 'Adaptive Portfolios in Real Time',
      description: 'Your investments evolve automatically based on market trends, personal goals, and cash flow changes — keeping your wealth aligned with your life.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30L18 18L24 24L30 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 10L30 16M30 10L24 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: 'bg-gray-100'
    },
    {
      id: 'ai-understands',
      title: 'AI That Understands You',
      description: 'Singari\'s behavioral and financial AI personalizes recommendations for your unique "financial genome," making investing truly yours.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10C14.477 10 10 14.477 10 20C10 22.5 11 24.5 12.5 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M20 10C25.523 10 30 14.477 30 20C30 22.5 29 24.5 27.5 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="20" cy="20" r="3" fill="currentColor"/>
          <path d="M20 27V30M17 30H23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="15" cy="17" r="1.5" fill="currentColor"/>
          <circle cx="25" cy="17" r="1.5" fill="currentColor"/>
        </svg>
      ),
      bgColor: 'bg-white'
    },
    {
      id: 'human-friendly',
      title: 'Clear, Human-Friendly Insights',
      description: 'Every portfolio change comes with easy-to-understand AI-generated explanations — no jargon, no confusion.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12C10 10.8954 10.8954 10 12 10H28C29.1046 10 30 10.8954 30 12V24C30 25.1046 29.1046 26 28 26H22L18 30V26H12C10.8954 26 10 25.1046 10 24V12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 16H25M15 20H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      bgColor: 'bg-gray-100'
    },
    {
      id: 'trustworthy-guidance',
      title: 'Smart, Trustworthy Guidance',
      description: 'From market volatility to long-term planning, Singari provides proactive suggestions and nudges, so you can invest confidently and stress-free.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M20 15V20L23 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M20 10V12M20 28V30M10 20H12M28 20H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M13.5 13.5L15 15M25 25L26.5 26.5M26.5 13.5L25 15M15 25L13.5 26.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      bgColor: 'bg-gray-100'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            // Trigger animations when section comes into view
            features.forEach((feature, index) => {
              const card = containerRef.current?.querySelector(`[data-card="${feature.id}"]`);
              if (!card) return;

              gsap.fromTo(
                card,
                {
                  opacity: 0,
                  y: 100,
                  filter: 'blur(10px)',
                  scale: 0.9
                },
                {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  scale: 1,
                  duration: 0.8,
                  ease: 'power3.out',
                  delay: index * 0.1
                }
              );
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (id: string) => {
    const card = containerRef.current?.querySelector(`[data-card="${id}"]`);
    if (!card) return;
    
    gsap.to(card, {
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (id: string) => {
    const card = containerRef.current?.querySelector(`[data-card="${id}"]`);
    if (!card) return;
    
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[2.25rem] font-normal mb-10 text-[#1D1D1F]">Value Proposition</h2>
        
        <div ref={containerRef} className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <div 
              key={feature.id}
              data-card={feature.id}
              className={`${feature.bgColor} rounded-[1.5rem] p-8 flex flex-col min-h-[280px] cursor-pointer opacity-0 border border-gray-200`}
              style={{ willChange: 'transform' }}
              onMouseEnter={() => handleMouseEnter(feature.id)}
              onMouseLeave={() => handleMouseLeave(feature.id)}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[1.1rem] font-normal max-w-[240px] leading-snug text-[#1D1D1F]">
                  {feature.title}
                </h3>
                <div className="text-black opacity-80 flex-shrink-0">
                  {feature.icon}
                </div>
              </div>
              <p className="text-[#6E6E73] text-[0.95rem] leading-relaxed font-normal mt-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
