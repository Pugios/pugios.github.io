"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [dir, setDir]     = useState(1);
  const [lightbox, setLightbox] = useState(false);

  function go(next: number, direction: number) {
    setDir(direction);
    setIndex(((next % images.length) + images.length) % images.length);
  }

  return (
    <>
      {/* ── Strip ─────────────────────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden rounded-xl bg-black/30"
        style={{ aspectRatio: "16 / 10" }}
      >
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 cursor-zoom-in"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50)      go(index + 1,  1);
              else if (info.offset.x > 50)  go(index - 1, -1);
            }}
            onClick={() => setLightbox(true)}
          >
            <Image
              src={images[index]}
              alt={`Screenshot ${index + 1}`}
              fill
              className="object-contain pointer-events-none"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full
                bg-black/60 text-white text-xl leading-none flex items-center justify-center
                hover:bg-black/80 transition-colors"
              onClick={(e) => { e.stopPropagation(); go(index - 1, -1); }}
            >‹</button>
            <button
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full
                bg-black/60 text-white text-xl leading-none flex items-center justify-center
                hover:bg-black/80 transition-colors"
              onClick={(e) => { e.stopPropagation(); go(index + 1, 1); }}
            >›</button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5 pointer-events-none">
            {images.map((_, i) => (
              <span
                key={i}
                className={`inline-block h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl px-14"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative" style={{ aspectRatio: "16 / 10" }}>
                <Image
                  src={images[index]}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <button
                aria-label="Close"
                className="absolute -top-6 right-4 text-white/60 hover:text-white text-3xl leading-none"
                onClick={() => setLightbox(false)}
              >×</button>

              {images.length > 1 && (
                <>
                  <button
                    aria-label="Previous"
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl px-1"
                    onClick={() => go(index - 1, -1)}
                  >‹</button>
                  <button
                    aria-label="Next"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl px-1"
                    onClick={() => go(index + 1, 1)}
                  >›</button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
