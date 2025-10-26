import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#F5F5F7] py-24">
      <div className="w-full max-w-[1400px] mx-auto px-12">
        <div className="max-w-[650px] mb-20">
          {/* Vision Badge */}
          <div className="inline-flex items-center px-5 py-2 bg-[#D4CFED] rounded-full mb-8">
            <span className="text-[#5227FF] font-semibold text-sm uppercase tracking-wide">Vision</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[3.5rem] font-normal text-[#1D1D1F] leading-[1.1] mb-6">
            Wealth that grows<br />with you
          </h2>

          {/* Description */}
          <p className="text-[1.05rem] text-[#6E6E73] leading-relaxed">
            Singari reimagines investing as a living, evolving journey — one that listens, adapts, and aligns with who you are becoming. Your goals change, your emotions shift, your life moves forward — and your wealth should too.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[1100px]">
          {/* Horizontal Line */}
          <div className="absolute top-[50%] left-0 right-0 h-[2px] bg-[#D1D1D6] transform -translate-y-1/2"></div>

          {/* Timeline Steps */}
          <div className="relative grid grid-cols-4 gap-8">
            {/* Step 1: Discover Yourself */}
            <div className="relative flex flex-col items-start">
              <div className="text-left mb-16">
                <h3 className="text-[1.35rem] font-normal text-[#1D1D1F] leading-tight">
                  Discover<br />Yourself
                </h3>
              </div>
              <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
                <div className="w-[18px] h-[18px] rounded-full bg-[#86868B] border-4 border-[#F5F5F7]"></div>
              </div>
            </div>

            {/* Step 2: Personal Blueprint */}
            <div className="relative flex flex-col items-start">
              <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
                <div className="w-[18px] h-[18px] rounded-full bg-[#86868B] border-4 border-[#F5F5F7]"></div>
              </div>
              <div className="text-left mt-20">
                <h3 className="text-[1.35rem] font-normal text-[#1D1D1F] leading-tight">
                  Personal<br />Blueprint
                </h3>
              </div>
            </div>

            {/* Step 3: Adaptive Growth */}
            <div className="relative flex flex-col items-start">
              <div className="text-left mb-16">
                <h3 className="text-[1.35rem] font-normal text-[#1D1D1F] leading-tight">
                  Adaptive<br />Growth
                </h3>
              </div>
              <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
                <div className="w-[18px] h-[18px] rounded-full bg-[#86868B] border-4 border-[#F5F5F7]"></div>
              </div>
            </div>

            {/* Step 4: Empowered Living */}
            <div className="relative flex flex-col items-start">
              <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
                <div className="w-[18px] h-[18px] rounded-full bg-[#86868B] border-4 border-[#F5F5F7]"></div>
              </div>
              <div className="text-left mt-20">
                <h3 className="text-[1.35rem] font-normal text-[#1D1D1F] leading-tight">
                  Empowered<br />Living
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
