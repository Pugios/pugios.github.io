"use client";

import { motion } from "motion/react";
import Image from "next/image";

const SOCIALS = [
  { icon: "/icons/instagram.png", label: "Instagram", href: "https://www.instagram.com/pugiosa/" },
  { icon: "/icons/linkedin.png",  label: "LinkedIn",  href: "https://www.linkedin.com/in/mohamed-matar-42723a175/" },
  { icon: "/icons/steam.png",     label: "Steam",     href: "https://steamcommunity.com/profiles/76561198087284966/" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/img/night.jpg"
          alt="Night sky"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Fade from dark at top */}
      {/* 
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-[#002461] to-transparent" /> 
      */}

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8 px-6 py-24">
        <h2 className="text-white text-3xl font-light tracking-wide">Contact</h2>

        <a
          href="mailto:matar.mohamed@gmx.de"
          className="text-white/75 text-base hover:text-white transition-colors duration-200"
        >
          matar.mohamed@gmx.de
        </a>

        <div className="flex items-center gap-5">
          {SOCIALS.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.08 }}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center
                shadow-[0_0_6px_1px_rgba(255,255,255,0.1)]
                hover:shadow-[0_0_18px_5px_rgba(255,255,255,0.5)]
                transition-shadow duration-300"
            >
              <div className="relative w-6 h-6">
                <Image src={s.icon} alt={s.label} fill sizes="24px" className="object-contain" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="relative z-10 pb-6 text-center text-white/35 text-xs">
        © 2026 Mohamed Matar
      </p>
    </section>
  );
}
