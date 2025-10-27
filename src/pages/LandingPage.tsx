import React from 'react';
import StaggeredMenu from '../components/StaggeredMenu';
import SplitText from '../components/SplitText';
import CountUp from '../components/CountUp';
import LaunchCountdown from '../components/LaunchCountdown';
import VisionSection from '../components/VisionSection';
import ValueProposition from '../components/ValueProposition';
import DefinesSingari from '../components/DefinesSingari';
import InvestmentPhilosophy from '../components/InvestmentPhilosophy';
import CapabilitiesSnapshot from '../components/CapabilitiesSnapshot';
import FAQs from '../components/FAQsection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  // Launch date: January 31, 2025 at 00:00
  const launchDate = new Date('2025-01-31T00:00:00');

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to Home', link: '#' },
    { label: 'Vision', ariaLabel: 'Our Vision', link: '#vision' },
    { label: 'Value', ariaLabel: 'Value Proposition', link: '#value' },
    { label: 'About', ariaLabel: 'What Defines Us', link: '#about' },
    { label: 'Philosophy', ariaLabel: 'Investment Philosophy', link: '#philosophy' },
    { label: 'Capabilities', ariaLabel: 'Capabilities Snapshot', link: '#capabilities' },
    { label: 'FAQs', ariaLabel: 'QnA', link: '#faqs' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Instagram', link: 'https://instagram.com' },
  ];

  return (
    <div className="min-h-screen bg-[#fefefe] overflow-hidden">
      {/* Header with Staggered Menu */}
      <StaggeredMenu
        position="right"
        colors={['#696EB0', '#979BE2']}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        logoUrl="/logo.svg"
        menuButtonColor="#000"
        openMenuButtonColor="#000"
        accentColor="#082159"
        isFixed={true}
        changeMenuColorOnOpen={true}
      />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col lg:flex-row overflow-hidden pt-20">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center px-6 md:px-12 lg:px-16 py-8">
          <div className="space-y-4 w-full max-w-xl">
            {/* Launch Countdown Badge */}
            <LaunchCountdown launchDate={launchDate} />

            {/* Main Heading */}
            <SplitText
              text="Finance that listens, learns, and grows with your life."
              tag="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1D1D1F] leading-tight font-satoshi"
              splitType="words, chars"
              delay={30}
              duration={0.8}
              ease="power3.out"
              from={{ opacity: 0, y: 50, rotateX: -90 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.2}
              textAlign="left"
            />

            {/* Subtext */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Experience the future of personal finance management with AI-powered insights 
              and intuitive design.
            </p>

            {/* Email Input */}
            <div className="w-full max-w-lg pt-2">
              {/* Desktop: Connected Layout */}
              <div className="hidden md:flex items-center border border-gray-300 rounded-full p-1 focus-within:ring-1 focus-within:ring-[#082159] focus-within:border-transparent transition-all hover:shadow-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3.5 bg-transparent border-0 rounded-full focus:outline-none text-base text-black"
                />
                <button className="px-8 py-3.5 bg-[#082159] text-white rounded-full font-medium hover:bg-opacity-90 hover:scale-105 transition-all duration-200 whitespace-nowrap text-base active:scale-95">
                  Join Waitlist
                </button>
              </div>
              
              {/* Mobile: Separate Layout */}
              <div className="md:hidden flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3.5 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#082159] focus:border-transparent transition-all text-base text-black bg-white"
                />
                <button className="w-full px-8 py-3.5 bg-[#082159] text-white rounded-full font-medium hover:bg-opacity-90 active:scale-95 transition-all duration-200 text-base">
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 md:gap-16 pt-6">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#1D1D1F] leading-none font-satoshi">
                  <CountUp to={1200} duration={2.5} separator="," />+
                </div>
                <div className="text-[#6E6E73] text-sm md:text-base">Early Users</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#1D1D1F] leading-none font-satoshi">
                  <CountUp to={99} duration={2} />%
                </div>
                <div className="text-[#6E6E73] text-sm md:text-base">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="flex w-full lg:w-1/2 relative items-center justify-center overflow-hidden">
          <img 
            src="/hero.png" 
            alt="Hero Dashboard" 
            role="img"
            aria-label="A mockup of the Singari application dashboard on a screen."
            className="h-full w-full lg:w-[120%] object-cover object-center lg:object-left scale-150 lg:scale-100"
          />
        </div>
      </section>

      {/* Vision Section */}
      <VisionSection />

      {/* Value Proposition Section */}
      <ValueProposition />

      {/* What Defines Singari Section */}
      <DefinesSingari />

      {/* Investment Philosophy Section */}
      <InvestmentPhilosophy />

      {/* Capabilities Snapshot Section */}
      <CapabilitiesSnapshot />

      {/* FAQs Section */}
      <FAQs />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
