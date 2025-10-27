import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#082159] py-6 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/logo.svg" 
              alt="Singari Logo" 
              className="h-8 w-auto brightness-[1000]"
            />
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-white text-sm text-center md:text-left font-satoshi"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Copyright © 2025 Singari | All Rights Reserved
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;