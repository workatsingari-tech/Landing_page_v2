import React from 'react';
import FAQs from './FAQs';

const FAQsection: React.FC = () => {
  return (
    <section id='faqs' className="w-full h-fit py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-satoshi font-medium mb-10 text-black text-center md:text-left">
          FAQs
        </h2>
        
        <FAQs/>
      </div>
    </section>
  );
};

export default FAQsection;