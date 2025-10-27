import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#dddfff43] py-20 px-6">
      <motion.div 
        className="max-w-[700px] mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-normal mb-4 text-[#1D1D1F] leading-tight md:leading-[1.1] font-satoshi"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tailored investing starts here.<br />Get early access.
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
        <motion.div 
          className="w-full max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Desktop: Connected Layout */}
          <div className="hidden md:flex items-center bg-[#dddfff24] border border-gray-300 rounded-full p-1.5 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-[#082159] focus-within:border-[#082159] transition-all">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-transparent border-0 rounded-full focus:outline-none text-base text-[#1D1D1F] placeholder:text-gray-400"
            />
            <motion.button 
              className="px-8 py-3 bg-[#082159] text-white rounded-full font-medium transition-all duration-200 whitespace-nowrap text-base shadow-sm"
              whileHover={{ scale: 1.05, backgroundColor: '#0a2970' }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.button>
          </div>
          
          {/* Mobile: Separate Layout */}
          <div className="md:hidden flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#082159] focus:border-[#082159] transition-all text-base text-[#1D1D1F] placeholder:text-gray-400 shadow-sm"
            />
            <motion.button 
              className="w-full px-8 py-4 bg-[#082159] text-white rounded-full font-medium transition-all duration-200 text-base shadow-sm"
              whileHover={{ scale: 1.02, backgroundColor: '#0a2970' }}
              whileTap={{ scale: 0.98 }}
            >
              Join Waitlist
            </motion.button>
          </div>
        </motion.div>
        
        {/* Optional: Trust indicator */}
        {/* <p className="text-xs text-gray-500 mt-6">
          Join 1,000+ early users on the waitlist
        </p> */}
      </motion.div>
    </section>
  );
};

export default CTASection;