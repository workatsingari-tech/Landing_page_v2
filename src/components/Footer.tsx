import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to Home", link: "#" },
    { label: "Philosophy", ariaLabel: "Investment Philosophy", link: "#philosophy" },
    { label: "Vision", ariaLabel: "Our Vision", link: "#vision" },
    { label: "Capabilities", ariaLabel: "Capabilities Snapshot", link: "#capabilities" },
    { label: "Value", ariaLabel: "Value Proposition", link: "#value" },
    { label: "FAQs", ariaLabel: "QnA", link: "#faqs" },
    { label: "About", ariaLabel: "What Defines Us", link: "#about" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Instagram", link: "https://instagram.com" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", link: "/privacy" },
    { label: "Terms & Conditions", link: "/terms" },
  ];

  return (
    <footer className="w-full bg-[#082159] py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section: Logo + tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.img
            src="/logo.svg"
            alt="Singari Logo"
            className="h-8 w-auto mb-4 brightness-[1000]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <p className="text-sm text-white/70 max-w-xs">
          Finance that listens, learns, and grows with your life.
          </p>
        </div>

        {/* Center Section: Navigation */}
        <div className="grid grid-cols-2 gap-3 text-sm text-white/80 text-center md:text-left font-satoshi">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              aria-label={item.ariaLabel}
              whileHover={{ opacity: 1, x: 4 }}
              transition={{ duration: 0.2 }}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Right Section: Social + Legal */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
          {/* Social links */}
          <div className="flex space-x-4 font-satoshi">
            {socialItems.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-white/80 hover:text-white"
              >
                {social.label}
              </motion.a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-xs text-white/60 font-satoshi">
            {legalLinks.map((link, i) => (
              <a
                key={i}
                href={link.link}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-white/50 mt-2">
            © 2025 Singari. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
