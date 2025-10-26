import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section id='vision' className="relative w-full min-h-screen flex items-center bg-[#DDDFFF43] py-20 px-6">
      <div className="w-full mx-auto max-w-7xl">
        <div className="max-w-[650px] mb-12 md:mb-20">
          {/* Vision Badge */}
          <div 
            className="inline-flex items-center px-6 py-2 rounded-full mb-2"
            style={{
              background: 'linear-gradient(205.82deg, #FBFBFE 16.3%, #F1F0FB 86.48%)',
              border: '0.5px solid #F1F2F9',
              boxShadow: 'inset 0px -1px 2.5px rgba(190, 186, 233, 0.25), inset 0px 2px 2px rgba(255, 255, 255, 0.77)',
              borderRadius: '200px'
            }}
          >
            <span className="text-gray-700 text-sm tracking-wide uppercase">Vision</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1D1F] leading-tight mb-2 font-satoshi">
            Wealth that grows<br />with you
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Singari reimagines investing as a living, evolving journey — one that listens, adapts, and aligns with who you are becoming. Your goals change, your emotions shift, your life moves forward — and your wealth should too.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Top Row - with bottom border */}
            <div className="grid grid-cols-4 border-b-[2px] border-[#D5D5D5] pb-4">
              {/* Column 1: Discover Yourself */}
              <div className="flex flex-col items-center justify-end md:-mb-[27px]">
                <h3 className="text-2xl font-bold font-satoshi text-[#1D1D1F] leading-tight text-center">
                  Discover<br />Yourself
                </h3>
                <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] mt-4"></div>
              </div>

              {/* Column 2: Empty */}
              <div className="flex flex-col items-center justify-end">
                <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] mt-4 hidden"></div>
              </div>

              {/* Column 3: Adaptive Growth */}
              <div className="flex flex-col items-center justify-end md:-mb-[27px]">
                <h3 className="text-2xl font-bold font-satoshi text-[#1D1D1F] leading-tight text-center">
                  Adaptive<br />Growth
                </h3>
                <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] mt-4"></div>
              </div>

              {/* Column 4: Empty */}
              <div className="flex flex-col items-center justify-end">
                <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] mt-4 hidden"></div>
              </div>
            </div>

            {/* Bottom Row - with top border */}
            <div className="grid grid-cols-4 border-t-[2px] border-[#D5D5D5] pt-4">
              {/* Column 1: Empty */}
              <div className="flex flex-col items-center justify-start">
                <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] mb-4 hidden"></div>
              </div>

              {/* Column 2: Personal Blueprint */}
              <div className="flex flex-col items-center justify-start md:-mt-[27px]">
                <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] mb-4"></div>
                <h3 className="text-2xl font-bold font-satoshi text-[#1D1D1F] leading-tight text-center">
                  Personal<br />Blueprint
                </h3>
              </div>

              {/* Column 3: Empty */}
              <div className="flex flex-col items-center justify-start">
                <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] mb-4 hidden"></div>
              </div>

              {/* Column 4: Empowered Living */}
              <div className="flex flex-col items-center justify-start md:-mt-[27px]">
                <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] mb-4"></div>
                <h3 className="text-2xl font-bold font-satoshi text-[#1D1D1F] leading-tight text-center">
                  Empowered<br />Living
                </h3>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden w-full border-l-[2px] border-[#D5D5D5] pl-4">
            {/* Step 1: Discover Yourself */}
            <div className="flex flex-row items-center gap-4 py-8">
              <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] -ml-[25px]"></div>
              <h3 className="text-xl font-semibold font-satoshi text-[#1D1D1F] leading-tight uppercase">
                Discover Yourself
              </h3>
            </div>

            {/* Step 2: Personal Blueprint */}
            <div className="flex flex-row items-center gap-4 py-8">
              <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] -ml-[25px]"></div>
              <h3 className="text-xl font-semibold font-satoshi text-[#1D1D1F] leading-tight uppercase">
                Personal Blueprint
              </h3>
            </div>

            {/* Step 3: Adaptive Growth */}
            <div className="flex flex-row items-center gap-4 py-8">
              <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] -ml-[25px]"></div>
              <h3 className="text-xl font-semibold font-satoshi text-[#1D1D1F] leading-tight uppercase">
                Adaptive Growth
              </h3>
            </div>

            {/* Step 4: Empowered Living */}
            <div className="flex flex-row items-center gap-4 py-8">
              <div className="w-[18px] h-[18px] rounded-full bg-[#D5D5D5] border-4 border-[#D5D5D5] -ml-[25px]"></div>
              <h3 className="text-xl font-semibold font-satoshi text-[#1D1D1F] leading-tight uppercase">
                Empowered Living
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
