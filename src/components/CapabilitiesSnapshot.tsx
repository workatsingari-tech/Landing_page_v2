import React from 'react';

const CapabilitiesSnapshot: React.FC = () => {
  const capabilities = [
    {
      id: 'adaptive-portfolio',
      title: 'Adaptive Portfolio Management',
      description: 'Portfolios evolve in real time using AI and behavioral insights to align with your goals, risk, and life changes.',
      image: '/capabilities/cap1.svg'
    },
    {
      id: 'goal-oriented',
      title: 'Goal-Oriented Wealth Planning',
      description: 'Investments are tailored to your personal milestones, like buying a home, retirement, or career transitions.',
      image: '/capabilities/cap2.svg'
    },
    {
      id: 'explainable-ai',
      title: 'Explainable AI Recommendations',
      description: 'Every portfolio decision comes with clear, plain-language narratives — so you always understand why changes happen.',
      image: '/capabilities/cap3.svg'
    },
    {
      id: 'cross-border',
      title: 'Cross-Border and Multi-Asset Integration',
      description: 'Seamlessly manage diversified portfolios across markets, asset classes, and currencies with tax-optimized strategies.',
      image: '/capabilities/cap4.svg'
    }
  ];

  return (
    <section id='capabilities' className="w-full min-h-screen py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-satoshi font-normal mb-10 text-[#1D1D1F] text-center md:text-left">
          Capabilities Snapshot
        </h2>
        
        <div className="max-w-6xl mx-auto h-fit py-6 flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6 h-full">
            <div className="bg-[#3B4686] rounded-[1.5rem] p-8 flex flex-col items-start justify-between hover:brightness-110 transition-all duration-300ms">
              <img src={capabilities[0].image} alt="" className="w-full h-auto mb-3" />
              <p className="text-white text-lg font-semibold">
                {capabilities[0].title}:  
                <span className='font-normal'> {capabilities[0].description}</span>
              </p>
            </div>
            <div className="flex-1 bg-[#696EB0] rounded-[1.5rem] p-8 flex flex-col items-start justify-between hover:brightness-110 transition-all duration-300ms">
              <img src={capabilities[1].image} alt="" className="w-1/2 h-auto mb-3" />
              <p className="text-white text-lg font-semibold">
                {capabilities[1].title}:  
                <span className='font-normal'> {capabilities[1].description}</span>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6 h-full">
            <div className="bg-[#082159] rounded-[1.5rem] p-8 flex flex-col items-start justify-between hover:brightness-110 transition-all duration-300ms">
              <img src={capabilities[2].image} alt="" className="w-1/2 h-auto mb-5" />
              <p className="text-white text-lg font-semibold mt-5">
                {capabilities[2].title}:  
                <span className='font-normal'> {capabilities[2].description}</span>
              </p>
            </div>
            <div className="flex-1 bg-[#979BE2] rounded-[1.5rem] p-8 flex flex-col items-start justify-between hover:brightness-110 transition-all duration-300ms">
              <img src={capabilities[3].image} alt="" className="w-1/2 h-auto mb-3" />
              <p className="text-white text-lg font-semibold">
                {capabilities[3].title}:  
                <span className='font-normal'> {capabilities[3].description}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSnapshot;