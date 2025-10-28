"use client";

import { useAnimationFrame, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

type Brand = {
  id: number | string;
  name: string;
  logo: string;
};

export default function BrandsMarquee(): JSX.Element {
  const baseVelocity = -50; // px per second — slower = smoother
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const x = useRef(0);
  const [contentWidth, setContentWidth] = useState<number>(0);

  const brands: Brand[] = [
    { id: 1, name: "InteractiveBroker", logo: "/brokers/interactiveBroker.webp" },
    { id: 2, name: "Etrade", logo: "/brokers/etrade.png" },
    { id: 3, name: "CharlesSCHWAB", logo: "/brokers/charlesSchwab.png" },
    { id: 4, name: "Fidelity", logo: "/brokers/fidelity.jpeg" },
    { id: 5, name: "Vanguard", logo: "/brokers/vanguard.png" },
    { id: 6, name: "InteractiveBroker", logo: "/brokers/interactiveBroker.webp" },
    { id: 7, name: "Etrade", logo: "/brokers/etrade.png" },
    { id: 8, name: "CharlesSCHWAB", logo: "/brokers/charlesSchwab.png" },
    { id: 9, name: "Fidelity", logo: "/brokers/fidelity.jpeg" },
    { id: 10, name: "Vanguard", logo: "/brokers/vanguard.png" },
  ];

  const duplicatedBrands = [...brands, ...brands]; // duplicated for seamless loop

  useLayoutEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      setContentWidth(marquee.scrollWidth / 2);
    }
  }, [brands]);

  useAnimationFrame((_, delta) => {
    const marquee = marqueeRef.current;
    if (!marquee || contentWidth === 0) return;

    x.current += (baseVelocity * delta) / 1000;

    if (x.current <= -contentWidth) {
      x.current += contentWidth;
    }

    marquee.style.transform = `translate3d(${x.current}px, 0, 0)`;
  });

  const renderBrandCell = (brand: Brand): JSX.Element => (
    <div
      key={brand.id}
      className="flex-shrink-0 w-24 h-fit flex items-center justify-center"
    >
      <img
        src={brand.logo}
        alt={brand.name}
        width={72}
        height={48}
        className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-6 md:py-8 flex flex-col items-center">

      <motion.h2
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-satoshi text-xl sm:text-2xl md:text-3xl font-normal text-black mb-4 md:mb-8 max-w-7xl px-6 text-center">
        Partnered with the Best
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap gap-4 md:gap-8 will-change-transform"
          style={{
            transform: "translate3d(0, 0, 0)",
            transition: "transform 0.05s linear",
          }}
        >
          {duplicatedBrands.map((brand) => renderBrandCell(brand))}
        </div>
      </div>
    </div>
  );
}
