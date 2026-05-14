"use client";

import { motion } from "motion/react";
import Image from "next/image";

const SOCIALS = [
  { icon: "/icons/github.png",    label: "GitHub",    href: "https://github.com/Pugios" },
  { icon: "/icons/instagram.png", label: "Instagram", href: "https://www.instagram.com/pugiosa/" },
  { icon: "/icons/linkedin.png",  label: "LinkedIn",  href: "https://www.linkedin.com/in/mohamed-matar-42723a175/" },
  { icon: "/icons/steam.png",     label: "Steam",     href: "https://steamcommunity.com/profiles/76561198087284966/" },
];

const DETAILS = [
  {
    href: "mailto:matar.mohamed@gmx.de",
    label: "matar.mohamed@gmx.de",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    href: "tel:+4915750675315",
    label: "+49 1575 0675315",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
  },
  {
    href: null,
    label: "Berlin, Germany",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/img/night_shifted.jpg"
          alt="Night sky"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-24">
        <h2 className="text-white text-3xl font-light tracking-wide">Contact</h2>

        {/* Contact details */}
        <div className="flex flex-col items-start gap-5 mt-5 py-4">
          {DETAILS.map((d) =>
            d.href ? (
              <a
                key={d.label}
                href={d.href}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200"
              >
                {d.icon}
                <span className="text-sm">{d.label}</span>
              </a>
            ) : (
              <div key={d.label} className="flex items-center gap-3 text-white/70">
                {d.icon}
                <span className="text-sm">{d.label}</span>
              </div>
            )
          )}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 mt-2">
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
