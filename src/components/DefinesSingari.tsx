import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DefinesSingari: React.FC = () => {
  const cards = [
    {
      id: 'ethical',
      title: 'Ethical and Community-Driven',
      description: 'Safe, anonymized insights that improve recommendations for everyone.',
      bgColor: 'bg-gradient-to-br from-[#B19EEF] to-[#8479C8]',
      zIndex: 1,
      rotation: -8,
      xOffset: -450,
      yOffset: 20
    },
    {
      id: 'empowerment',
      title: 'Empowerment Through Clarity',
      description: 'Simple, gamified guidance to make you confident financial decisions.',
      bgColor: 'bg-gradient-to-br from-[#4D59A5] to-[#3B4686]',
      zIndex: 2,
      rotation: -4,
      xOffset: -230,
      yOffset: -10
    },
    {
      id: 'human-centric',
      title: 'Human-Centric Intelligence',
      description: 'AI and behavioral insights that create portfolios tailored to you.',
      bgColor: 'bg-gradient-to-br from-[#0B2654] to-[#1B3264]',
      zIndex: 4,
      rotation: 0,
      xOffset: 0,
      yOffset: -30
    },
    {
      id: 'transparency',
      title: 'Transparency and Trust',
      description: 'Clear, easy to understand explanations for every recommendation.',
      bgColor: 'bg-gradient-to-br from-[#4D59A5] to-[#3B4686]',
      zIndex: 2,
      rotation: 4,
      xOffset: 230,
      yOffset: -10
    },
    {
      id: 'adaptive',
      title: 'Adaptive and Proactive',
      description: 'Portfolios evolve in real time with markets and life changes.',
      bgColor: 'bg-gradient-to-br from-[#B19EEF] to-[#8479C8]',
      zIndex: 1,
      rotation: 8,
      xOffset: 450,
      yOffset: 20
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // Animate cards into shuffled position
            cards.forEach((card, index) => {
              const cardEl = containerRef.current?.querySelector(`[data-card="${card.id}"]`);
              if (!cardEl) return;

              gsap.fromTo(
                cardEl,
                {
                  opacity: 0,
                  y: 100,
                  scale: 0.8
                },
                {
                  opacity: 1,
                  y: 0,
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
        threshold: 0.2
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (id: string, card: typeof cards[0]) => {
    const cardEl = containerRef.current?.querySelector(`[data-card="${id}"]`) as HTMLElement;
    if (!cardEl) return;

    gsap.to(cardEl, {
      y: card.yOffset - 40,
      scale: 1.05,
      zIndex: 10,
      rotation: 0,
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (id: string, card: typeof cards[0]) => {
    const cardEl = containerRef.current?.querySelector(`[data-card="${id}"]`) as HTMLElement;
    if (!cardEl) return;

    gsap.to(cardEl, {
      y: card.yOffset,
      scale: 1,
      zIndex: card.zIndex,
      rotation: card.rotation,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-[1460px] mx-auto">
        <h2 className="text-[2.25rem] font-normal mb-16 text-[#1D1D1F]">What defines Singari?</h2>

        <div 
          ref={containerRef}
          className="relative h-[540px] flex items-center justify-center"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              data-card={card.id}
              className={`absolute ${card.bgColor} rounded-[2rem] p-8 cursor-pointer opacity-0 shadow-2xl`}
              style={{
                width: '340px',
                height: '420px',
                transform: `translateX(${card.xOffset}px) translateY(${card.yOffset}px) rotate(${card.rotation}deg)`,
                zIndex: card.zIndex,
                willChange: 'transform, z-index, box-shadow'
              }}
              onMouseEnter={() => handleMouseEnter(card.id, card)}
              onMouseLeave={() => handleMouseLeave(card.id, card)}
            >
              <div className="flex flex-col h-full justify-between text-white">
                <h3 className="text-2xl font-semibold leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/90 text-base leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefinesSingari;
