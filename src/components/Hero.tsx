"use client";

import { motion } from "framer-motion";
import LaunchCountdown from "../components/LaunchCountdown";
import SplitText from "../components/SplitText";
import WaitlistButton from "../components/WaitlistButton";
import CountUp from "../components/CountUp";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row overflow-hidden pt-20 mb-10">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 flex items-center px-6 md:px-12 lg:px-16 py-8">
        <div className="space-y-4 w-full max-w-xl">
          {/* Launch Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <LaunchCountdown launchDate={new Date("2026-01-01T00:00:00")} />
          </motion.div>

          {/* Main Heading */}
          <SplitText
            text="Finance that listens, learns, and grows with your life."
            tag="h1"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-tight tracking-tight font-satoshi"
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
          <motion.p
            initial={{ opacity: 0, y: 30, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-base md:text-lg text-gray-600 leading-relaxed"
          >
            Experience the future of personal finance management with
            AI-powered insights and intuitive design.
          </motion.p>

          {/* Waitlist Button */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <WaitlistButton />
          </motion.div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8 md:gap-16 pt-6">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-black leading-none font-satoshi">
                <CountUp to={1200} duration={1} separator="," />+
              </div>
              <div className="text-[#6E6E73] text-sm md:text-base">
                Early Users
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-black leading-none font-satoshi">
                <CountUp to={99} duration={1} />%
              </div>
              <div className="text-[#6E6E73] text-sm md:text-base">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Static Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex w-full lg:w-1/2 relative items-center justify-center overflow-hidden"
      >
        <img
          src="/hero.svg"
          alt="Hero Dashboard"
          role="img"
          aria-label="A mockup of the Singari application dashboard on a screen."
          className="h-full w-full lg:w-[120%] object-cover object-center lg:object-left scale-150 lg:scale-100 mt-6"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
