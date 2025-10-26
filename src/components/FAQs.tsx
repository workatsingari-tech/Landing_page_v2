import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const faqs = [
    {
      question: 'How does Singari personalize my investment portfolio?',
      answer: 'Singari uses advanced AI and behavioral insights to analyze your financial goals, risk tolerance, and life circumstances. Our platform continuously adapts your portfolio in real-time based on market trends, personal milestones, and cash flow changes to keep your investments aligned with your unique financial genome.'
    },
    {
      question: 'What makes us different from other investment apps?',
      answer: 'Unlike traditional investment apps, Singari combines behavioral finance with AI-driven insights to create truly personalized portfolios. We provide clear, plain-language explanations for every decision, gamified guidance to build confidence, and adaptive strategies that evolve with your life. Our focus is on empowering you with transparency and human-centric intelligence.'
    },
    {
      question: 'Is my financial and personal data safe with Singari?',
      answer: 'Absolutely. We use bank-level encryption and follow industry-leading security protocols to protect your data. Your information is anonymized and used solely to improve recommendations while maintaining your privacy. We are committed to ethical, community-driven practices and will never sell your personal data.'
    },
    {
      question: 'When will I be able to start using Singari after joining the waitlist?',
      answer: 'We\'re currently in our pre-launch phase and building our community of early adopters. Waitlist members will get priority access when we launch, along with exclusive benefits and early-bird features. We\'ll keep you updated via email on our progress and your access timeline.'
    },
    {
      question: 'Are there any fees or costs associated with Singari once it launches?',
      answer: 'We believe in transparent pricing. While we\'re still finalizing our fee structure, we\'re committed to keeping costs competitive and clear. Early waitlist members will receive special pricing benefits. We\'ll share detailed pricing information before launch, with no hidden fees or surprises.'
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const items = sectionRef.current?.querySelectorAll('[data-faq-item]');
            if (items) {
              gsap.fromTo(
                items,
                {
                  opacity: 0,
                  y: 30
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.1,
                  ease: 'power3.out'
                }
              );
            }
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[2.25rem] font-normal mb-10 text-[#1D1D1F]">FAQs</h2>

        <div className="border border-gray-300 rounded-xl p-6 md:p-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-faq-item
                className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0 opacity-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between text-left py-3 group"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-gray-900 font-medium text-base flex-shrink-0">
                      {index + 1}.
                    </span>
                    <span className="text-gray-900 font-normal text-base leading-relaxed">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-8 pr-9 pt-2 pb-3">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
