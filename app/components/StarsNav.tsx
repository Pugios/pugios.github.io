"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface StarData {
  logo: string;
  alt: string;
  target: string;
}

const STARS: StarData[] = [
  { logo: "/icons/ibm.png",       alt: "IBM",                target: "download-cv" },
  { logo: "/icons/dhbw.png",      alt: "DHBW",               target: "download-cv" },
  { logo: "/icons/pugio.png",     alt: "Pugio",              target: "pugio-projects" },
  { logo: "/icons/universal.png", alt: "Universal Music",    target: "download-cv" },
  { logo: "/icons/tu_berlin.png", alt: "TU Berlin",          target: "master-thesis" },
];

// Mobile diamond order: Pugio (2), DHBW (1), TU Berlin (4), IBM (0), Universal (3)
const MOBILE_ORDER = [1, 0, 2, 3, 4];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SparkleStar({ star, size }: { star: StarData; size: number }) {
  return (
    <motion.button
      onClick={() => scrollTo(star.target)}
      aria-label={star.alt}
      className="relative cursor-pointer"
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="transition-[filter] duration-300 hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.9)]"
      >
        <path
          d="M50,0 C50,0 60,42 100,50 C60,58 50,100 50,100 C50,100 40,58 0,50 C40,42 50,0 50,0 Z"
          fill="white"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative" style={{ width: size * 0.44, height: size * 0.38 }}>
          <Image
            src={star.logo}
            alt={star.alt}
            fill
            className="object-contain"
            sizes={`${size}px`}
          />
        </div>
      </div>
    </motion.button>
  );
}

export default function StarsNav() {
  return (
    <div className="pb-8 pt-4 flex flex-col items-center">
      {/* Desktop: single row */}
      <div className="hidden md:flex flex-row items-center gap-8">
        {STARS.map((star) => (
          <SparkleStar key={star.alt} star={star} size={96} />
        ))}
      </div>

      {/* Mobile: X pattern (5 on a die) */}
      <div className="flex md:hidden flex-col items-center">
        {/* Row 1: DHBW + IBM */}
        <div className="flex gap-6">
          <SparkleStar star={STARS[MOBILE_ORDER[0]]} size={125} />
          <SparkleStar star={STARS[MOBILE_ORDER[1]]} size={125} />
        </div>
        {/* Row 2: Pugio — pulled into the gap between rows 1 and 3 */}
        <div className="-mt-6">
          <SparkleStar star={STARS[MOBILE_ORDER[2]]} size={125} />
        </div>
        {/* Row 3: Universal + TU Berlin — pulled up tight */}
        <div className="flex gap-6 -mt-6">
          <SparkleStar star={STARS[MOBILE_ORDER[3]]} size={125} />
          <SparkleStar star={STARS[MOBILE_ORDER[4]]} size={125} />
        </div>
      </div>
    </div>
  );
}
