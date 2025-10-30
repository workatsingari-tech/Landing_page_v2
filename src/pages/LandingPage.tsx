import React from 'react';
import StaggeredMenu from '../components/StaggeredMenu';
import VisionSection from '../components/VisionSection';
import ValueProposition from '../components/ValueProposition';
import DefinesSingari from '../components/DefinesSingari';
import InvestmentPhilosophy from '../components/InvestmentPhilosophy';
import CapabilitiesSnapshot from '../components/CapabilitiesSnapshot';
import FAQs from '../components/FAQsection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Brokers from '../components/BrokerList';
import Hero from '../components/Hero';
// import TopBlur from '../components/TopBlur';

const LandingPage: React.FC = () => {
  
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
    <main className="min-h-screen bg-white overflow-hidden relative">
      {/* Header with Staggered Menu */}
      <StaggeredMenu
        position="right"
        colors={['#ffffff', '#ffffff']}
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

      {/* Top Blur Layer */}
      {/* <TopBlur
        preset="page-header"
        height="6rem"
        strength={2}
        opacity={1}
        divCount={6}
        animated="scroll"
        curve="bezier"
        zIndex={1}  // Slightly below your StaggeredMenu
        target="page"
        className="pointer-events-none"
      /> */}

      <Hero />
      <VisionSection />
      <ValueProposition />
      <Brokers />
      <DefinesSingari />
      <InvestmentPhilosophy />
      <CapabilitiesSnapshot />
      <FAQs />
      <CTASection />
      <Footer />
    </main>
  );
};

export default LandingPage;
