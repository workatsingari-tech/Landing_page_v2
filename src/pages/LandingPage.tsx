import React from 'react';
import StaggeredMenu from '../components/StaggeredMenu';
import CircularProgress from '../components/CircularProgress';
import DashboardMockup from '../components/DashboardMockup';
import SplitText from '../components/SplitText';
import CountUp from '../components/CountUp';
import VisionSection from '../components/VisionSection';
import ValueProposition from '../components/ValueProposition';
import DefinesSingari from '../components/DefinesSingari';
import InvestmentPhilosophy from '../components/InvestmentPhilosophy';
import CapabilitiesSnapshot from '../components/CapabilitiesSnapshot';
import FAQs from '../components/FAQs';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to Home', link: '#home' },
    { label: 'Features', ariaLabel: 'View Features', link: '#features' },
    { label: 'About', ariaLabel: 'Learn About Us', link: '#about' },
    { label: 'Contact', ariaLabel: 'Contact Us', link: '#contact' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Instagram', link: 'https://instagram.com' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header with Staggered Menu */}
      <StaggeredMenu
        position="right"
        colors={['#B19EEF', '#5227FF']}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        logoUrl="/logo.svg"
        menuButtonColor="#000"
        openMenuButtonColor="#000"
        accentColor="#5227FF"
        isFixed={true}
        changeMenuColorOnOpen={true}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center pt-20">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 max-w-[580px]">
            {/* Alert Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E8E5F8] px-4 py-2 rounded-full">
              <span className="text-[#5227FF] font-semibold text-sm">Alert:</span>
              <span className="text-gray-700 text-sm">Launching in 1000 days</span>
            </div>

            {/* Main Heading */}
            <SplitText
              text="Finance that listens, learns, and grows with your life."
              tag="h1"
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-normal text-[#1D1D1F] leading-[1.1]"
              splitType="words, chars"
              delay={30}
              duration={0.8}
              ease="power3.out"
              from={{ opacity: 0, y: 50, rotateX: -90 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.2}
              textAlign="left"
            />

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md pt-3">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5227FF] focus:border-transparent text-sm bg-white"
              />
              <button className="px-7 py-3 bg-[#0066CC] text-white rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 whitespace-nowrap text-sm">
                Join Waitlist
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-[2.5rem] font-bold text-[#1D1D1F] leading-none">
                  <CountUp to={1200} duration={2.5} separator="," />+
                </div>
                <div className="text-[#6E6E73] text-sm mt-1.5">Early Users</div>
              </div>
              <div>
                <div className="text-[2.5rem] font-bold text-[#1D1D1F] leading-none">
                  <CountUp to={99} duration={2} />+
                </div>
                <div className="text-[#6E6E73] text-sm mt-1.5">kuch aur</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Components */}
          <div className="relative h-[700px] w-full hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main Dashboard Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[600px]">
                <DashboardMockup />
              </div>

              {/* Circular Progress Card - Top Left */}
              <div className="absolute top-0 left-0 z-10 scale-90">
                <CircularProgress percentage={75} size={140} strokeWidth={10} />
              </div>

              {/* Stats Card - Top Right */}
              <div className="absolute top-8 right-0 bg-white rounded-2xl shadow-xl p-5 w-52 border border-gray-100 z-10">
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 font-medium">Stats</span>
                    <span className="text-xs font-semibold text-singari-purple">+12%</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="space-y-1">
                      <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                        <div className="h-full bg-singari-purple rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                        <div className="h-full bg-singari-light-purple rounded-full transition-all duration-1000 delay-100" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                        <div className="h-full bg-singari-purple rounded-full transition-all duration-1000 delay-200" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                        <div className="h-full bg-singari-light-purple rounded-full transition-all duration-1000 delay-300" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                        <div className="h-full bg-singari-purple rounded-full transition-all duration-1000 delay-400" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* List Card - Bottom Right */}
              <div className="absolute bottom-4 right-6 bg-white rounded-2xl shadow-xl p-4 w-60 border border-gray-100 z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 text-singari-purple">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="h-2 bg-gray-200 rounded w-full mb-1.5"></div>
                      <div className="h-1.5 bg-gray-100 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 text-green-600">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="h-2 bg-gray-200 rounded w-full mb-1.5"></div>
                      <div className="h-1.5 bg-gray-100 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="h-2 bg-gray-200 rounded w-full mb-1.5"></div>
                      <div className="h-1.5 bg-gray-100 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
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
