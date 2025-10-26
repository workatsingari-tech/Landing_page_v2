import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#5227FF] py-6 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-3 md:mb-0">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="12" height="28" fill="white" rx="2"/>
              <rect x="16" width="12" height="28" fill="white" rx="2"/>
            </svg>
            <span className="text-white text-lg font-medium">Singari</span>
          </div>

          {/* Copyright */}
          <div className="text-white/90 text-sm">
            Copyright © 2025 Singari | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
