import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ValueProposition: React.FC = () => {
  const features = [
    {
      id: 'adaptive-portfolios',
      title: 'Adaptive Portfolios in Real Time',
      description: 'Your investments evolve automatically based on market trends, personal goals, and cash flow changes — keeping your wealth aligned with your life.',
      icon: '/valueIcons/ChartLineUp.svg',
      bgColor: 'bg-gray-200'
    },
    {
      id: 'ai-understands',
      title: 'AI That Understands You',
      description: 'Singari\'s behavioral and financial AI personalizes recommendations for your unique "financial genome," making investing truly yours.',
      icon: '/valueIcons/HeadCircuit.svg',
      bgColor: 'bg-gray-100'
    },
    {
      id: 'human-friendly',
      title: 'Clear, Human-Friendly Insights',
      description: 'Every portfolio change comes with easy-to-understand AI-generated explanations — no jargon, no confusion.',
      icon: '/valueIcons/ChatCenteredText.svg',
      bgColor: 'bg-gray-100'
    },
    {
      id: 'trustworthy-guidance',
      title: 'Smart, Trustworthy Guidance',
      description: 'From market volatility to long-term planning, Singari provides proactive suggestions and nudges, so you can invest confidently and stress-free.',
      icon: '/valueIcons/CompassRose.svg',
      bgColor: 'bg-gray-200'
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
    <section id='value' ref={sectionRef} className="w-full min-h-screen py-10 md:py-20 px-6">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-satoshi font-medium mb-10 text-black text-center md:text-left">Value Proposition</h2>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.id}
              data-card={feature.id}
              className={`${feature.bgColor} rounded-[1.5rem] p-6 flex flex-col min-h-[250px]`}
              style={{ willChange: 'transform, opacity, filter, scale' }}
              onMouseEnter={() => handleMouseEnter(feature.id)}
              onMouseLeave={() => handleMouseLeave(feature.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-3xl font-satoshi w-2/3 md:w-1/2 font-normal leading-snug text-black">
                  {feature.title}
                </h3>
                <div className="flex-shrink-0">
                  <img src={feature.icon} alt="" className="w-10 h-10 opacity-80" />
                </div>
              </div>
              <p className="text-[#6E6E73] text-sm md:text-base leading-relaxed font-normal mt-auto w-[85%]">
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
