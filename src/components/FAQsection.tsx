import React from 'react';
import FAQs from './FAQs';

const FAQsection: React.FC = () => {
  return (
    <section id='faqs' className="w-full h-fit py-10 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-satoshi font-medium mb-10 text-black text-center md:text-left">
          FAQ<span className='text-[#082159]'>&apos;</span>s
        </h2>
        
        <FAQs/>
      </div>
    </section>
  );
};

export default FAQsection;