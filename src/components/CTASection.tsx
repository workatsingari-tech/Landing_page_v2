import React from 'react';
import { motion } from 'framer-motion';
import WaitlistButton from './waitlistButton';

const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <motion.div 
        className="max-w-[700px] mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-normal mb-4 text-black leading-tight md:leading-[1.1] font-satoshi"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tailored investing starts here.<br className='hidden md:block' /> Get early access.
        </motion.h2>
        <motion.p 
          className="text-[#6E6E73] text-base md:text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Be the first to experience AI-driven, personalized investing.
        </motion.p>
        
        {/* Email Input */}
        <WaitlistButton/>
        
        {/* Optional: Trust indicator */}
        {/* <p className="text-xs text-gray-500 mt-6">
          Join 1,000+ early users on the waitlist
        </p> */}
      </motion.div>
    </section>
  );
};

export default CTASection;