import React from "react";

const VisionSection: React.FC = () => {
  return (
    <section
      id="vision"
      className="relative w-full h-fit bg-white overflow-hidden"
    >
      {/* Top Blue Section */}
      <div className="relative w-full bg-[#082159] flex flex-col justify-between pt-10 md:pt-20 pb-0">
        <div className="w-full mx-auto max-w-7xl px-6">
          <div className="max-w-[650px]">
            {/* Vision Badge */}
            <div className="inline-flex items-center px-6 py-2 rounded-full mb-2 bg-[#dddfff]">
              <span className="text-black text-sm tracking-wide uppercase">
                Vision
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight mb-2 font-satoshi">
              Wealth that
              <br />
              <span className="text-[#477fff]">grows with you</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-12">
              Singari reimagines investing as a living, evolving journey — one
              that listens, adapts, and aligns with who you are becoming. Your
              goals change, your emotions shift, your life moves forward — and
              your wealth should too.
            </p>
          </div>
        </div>

        {/* Vision Image 1 (upper part) */}
        <div className="relative w-full mx-auto max-w-7xl px-6">
          <img
            src="/vision1.png"
            alt="Singari vision illustration part 1"
            className="w-full h-auto object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="relative w-full h-fit bg-white">
        <div className="w-full mx-auto max-w-7xl px-6">
          <img
            src="/vision2.png"
            alt="Singari vision illustration part 2"
            className="w-full h-auto object-cover"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
