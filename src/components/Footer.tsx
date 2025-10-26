import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#082159] py-6 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Singari Logo" 
              className="h-8 w-auto brightness-[1000]"
            />
          </div>

          {/* Copyright */}
          <div className="text-white text-sm text-center md:text-left font-satoshi">
            Copyright © 2025 Singari | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;