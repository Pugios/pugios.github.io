"use client";

import { motion } from "motion/react";
import Image from "next/image";

const SPARKLE_PATH = "M50,0 C50,0 60,42 100,50 C60,58 50,100 50,100 C50,100 40,58 0,50 C40,42 50,0 50,0 Z";

interface TimelineEntry {
  id: string;
  icon: string;
  org: string;
  period: string;
  description: string;
}

const TIMELINE: TimelineEntry[] = [
  {
    id: "about-dhbw",
    icon: "/icons/dhbw.png",
    org: "DHBW Baden-Württemberg",
    period: "2017 - 2020",
    description: "Studied Business Information Systems through the dual-study model at DHBW, combining academic coursework in Baden-Württemberg with corporate rotations at IBM.",
  },
  {
    id: "about-ibm",
    icon: "/icons/ibm.png",
    org: "IBM",
    period: "2017 - 2020",
    description: "Completed five engineering and data science internships across IBM offices in Böblingen, Ehningen, and Armonk, New York. My Bachelor's thesis proposed a hybrid NLP model for detecting and resolving redundancies in large enterprise business glossaries.",
  },
  {
    id: "about-universal",
    icon: "/icons/universal.png",
    org: "Universal Music Group",
    period: "2020 - 2021",
    description: "Worked as a Data Scientist building analytical pipelines and dashboards to track artist performance and campaign impact. Enhanced a TF-IDF genre clustering system using playlist data to embed artists into a high-dimensional similarity space.",
  },
  {
    id: "about-tu-berlin",
    icon: "/icons/tu_berlin.png",
    org: "TU Berlin",
    period: "2021 - 2025",
    description: "Completed my M.Sc. in Computer Science with a focus on Cognitive Systems at the Technische Universität Berlin. My thesis developed a CNN-LSTM hybrid model for activity recognition in fisheye surveillance footage, graded 1.3. Continued as a Research Assistant afterwards.",
  },
  {
    id: "about-pugio",
    icon: "/icons/pugio.png",
    org: "Pugio",
    period: "ongoing",
    description: "My personal label for side projects and freelance work. From native Windows apps with AI-powered features to full-stack web platforms — if it seems worth building, I build it.",
  },
];

function StarWithLogo({ icon, org, size }: { icon: string; org: string; size: number }) {
  return (
    <motion.div
      className="relative shrink-0"
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
        <path d={SPARKLE_PATH} fill="white" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative" style={{ width: size * 0.44, height: size * 0.38 }}>
          <Image src={icon} alt={org} fill sizes={`${size}px`} className="object-contain" />
        </div>
      </div>
    </motion.div>
  );
}

function EntryContent({ item, align }: { item: TimelineEntry; align: "left" | "right" }) {
  return (
    <div className={align === "left" ? "text-left" : "text-right"}>
      <p className="text-white/40 text-xs tracking-widest uppercase mb-1">{item.period}</p>
      <h3 className="text-white font-medium text-base mb-2">{item.org}</h3>
      <p className="text-white/65 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative bg-[#1f1a52] py-20 px-6">
      <div className="absolute top-0 inset-x-0 h-[5%] bg-linear-to-b from-[#285ea8] to-transparent" />
      <div className="max-w-3xl mx-auto">
        {/* Timeline — one wrapper per entry holds both mobile and desktop variants */}
        <div className="relative flex flex-col gap-10 md:gap-12">
          {/* Desktop center line */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-1/2" />

          {TIMELINE.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={item.id} id={item.id}>
                {/* Mobile */}
                <div className="flex md:hidden gap-5 items-start">
                  <StarWithLogo icon={item.icon} org={item.org} size={96} />
                  <div className="pt-1">
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-1">{item.period}</p>
                    <h3 className="text-white font-medium text-base mb-2">{item.org}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {/* Desktop */}
                <div className="hidden md:grid grid-cols-[1fr_96px_1fr] items-center gap-x-6">
                  <div>{isLeft && <EntryContent item={item} align="right" />}</div>
                  <div className="flex justify-center relative z-10">
                    <StarWithLogo icon={item.icon} org={item.org} size={96} />
                  </div>
                  <div>{!isLeft && <EntryContent item={item} align="left" />}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Download CV */}
        <div id="download-cv" className="mt-16 flex justify-center">
          <a
            href="/docs/CV_Mohamed_Matar.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 bg-white text-gray-900 text-sm rounded-lg
              shadow-[0_0_8px_2px_rgba(255,255,255,0.1)]
              hover:shadow-[0_0_24px_6px_rgba(255,255,255,0.4)]
              transition-shadow duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
}
