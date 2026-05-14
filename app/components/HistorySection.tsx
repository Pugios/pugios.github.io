"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Btn, CARDS } from "../data/cards";
import ImageCarousel from "./ImageCarousel";

// ── Small helpers ─────────────────────────────────────────────────────────────
function GithubIcon() {
  return <div className="relative w-5 h-5"><Image src="/icons/github.png" alt="" fill sizes="20px" className="object-contain" /></div>;
}
function DownloadIcon() {
  return <div className="relative w-5 h-5"><Image src="/icons/download.png" alt="" fill sizes="20px" className="object-contain" /></div>;
}
function ExternalIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CardBtn({ btn }: { btn: Btn }) {
  return (
    <a
      href={btn.href}
      target={btn.type === "download" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      download={btn.type === "download" || undefined}
      aria-label={btn.label}
      title={btn.label}
      onClick={(e) => e.stopPropagation()}
      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900
        shadow-[0_0_6px_1px_rgba(255,255,255,0.1)]
        hover:shadow-[0_0_18px_5px_rgba(255,255,255,0.5)]
        transition-shadow duration-300"
    >
      {btn.type === "github"   ? <GithubIcon />   :
       btn.type === "download" ? <DownloadIcon />  :
                                 <ExternalIcon />}
    </a>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function HistorySection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedCard = CARDS.find((c) => c.id === selectedId) ?? null;

  // Lock body scroll while a card is expanded
  useEffect(() => {
    document.body.style.overflow = selectedId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedId]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedId(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="pugio-projects" className="bg-[#285ea8] py-20 px-6">

      {/* ── 2 × 2 grid ─────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-5">
        {CARDS.map((card) => (
          <motion.div
            key={card.id}
            layoutId={card.id}
            id={card.id === "master" ? "master-thesis" : undefined}
            onClick={() => setSelectedId(card.id)}
            className="relative overflow-hidden cursor-pointer bg-[#002c69] border border-white/25"
            style={{ borderRadius: 16, aspectRatio: "1 / 1" }}
            whileHover={{ boxShadow: "0 0 28px 6px rgba(255,255,255,0.22)" }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={card.images[0]}
              alt={card.title}
              fill
              className="object-contain"
              style={{
                objectPosition: card.thumbnailPosition ?? "50% 50%",
                transform: `scale(${card.thumbnailZoom ?? 1})`,
                transformOrigin: card.thumbnailPosition ?? "50% 50%",
              }}
              sizes="(max-width: 768px) calc(50vw - 28px), 374px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1632] via-[#0d1632]/50 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-4">
              <h3 className="text-white font-medium text-lg leading-tight">{card.title}</h3>
              <p className="text-white/55 text-xs mt-1 line-clamp-2">{card.shortDesc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Expanded overlay ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedCard && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />

            {/* Centering shell (pointer-events-none so backdrop click works) */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <motion.div
                layoutId={selectedCard.id}
                className="w-full max-w-4xl bg-[#0d1632] border border-white/30 pointer-events-auto overflow-hidden
                  shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                style={{ borderRadius: 16 }}
              >
                {/* Scrollable inner so the motion shell stays clean */}
                <div className="overflow-y-auto max-h-[88vh]">

                  {/* Header */}
                  <div className="flex items-start justify-between px-6 pt-6 pb-2">
                    <div>
                      <h2 className="text-white text-2xl font-medium">{selectedCard.title}</h2>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedCard.tags.map((tag) => (
                          <span
                            key={tag.label}
                            className="px-3 py-0.5 rounded-full text-xs text-white font-medium"
                            style={{ backgroundColor: tag.color }}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedId(null)}
                      aria-label="Close"
                      className="text-white/50 hover:text-white text-3xl leading-none ml-4 mt-1 transition-colors cursor-pointer"
                    >×</button>
                  </div>

                  {/* Body: carousel + description */}
                  <div className="flex flex-col md:flex-row gap-6 px-6 py-4">
                    <div className="md:w-[45%] flex-shrink-0">
                      <ImageCarousel images={selectedCard.images} />
                    </div>
                    <div className="md:flex-1 text-white/75 text-sm leading-relaxed">
                      {selectedCard.description}
                    </div>
                  </div>

                  {/* Footer: action buttons */}
                  <div className="flex justify-end gap-3 px-6 pb-6">
                    {selectedCard.buttons.map((btn) => (
                      <CardBtn key={btn.label} btn={btn} />
                    ))}
                  </div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
