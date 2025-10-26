import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-normal mb-3 text-[#1D1D1F] leading-tight">
          Tailored investing starts here.<br />Get early access.
        </h2>
        <p className="text-[#6E6E73] text-base mb-8">
          Be the first to experience AI-driven, personalized investing.
        </p>
        <button className="px-7 py-3 bg-[#0066CC] text-white rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 text-base">
          Join Waitlist
        </button>
      </div>
    </section>
  );
};

export default CTASection;
