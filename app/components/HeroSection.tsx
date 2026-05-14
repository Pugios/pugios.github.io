"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import StarsNav from "./StarsNav";

const NAMES = ["Mohamed Matar", "Pugio", "Momo"];
const TYPE_MS = 110;
const DELETE_MS = 65;
const WAIT_MS = 2200;
const START_DELAY_MS = 900;

function useCyclingName(active: boolean): string {
  const [text, setText] = useState(NAMES[0]);

  useEffect(() => {
    if (!active) return;

    let timeout: ReturnType<typeof setTimeout>;
    let nameIdx = 0;
    let charIdx = NAMES[0].length;
    let phase: "waiting" | "deleting" | "typing" = "waiting";

    function tick() {
      if (phase === "waiting") {
        phase = "deleting";
        timeout = setTimeout(tick, DELETE_MS);
      } else if (phase === "deleting") {
        charIdx--;
        setText(NAMES[nameIdx].slice(0, charIdx));
        if (charIdx === 0) {
          nameIdx = (nameIdx + 1) % NAMES.length;
          phase = "typing";
          timeout = setTimeout(tick, TYPE_MS);
        } else {
          timeout = setTimeout(tick, DELETE_MS);
        }
      } else {
        charIdx++;
        setText(NAMES[nameIdx].slice(0, charIdx));
        if (charIdx === NAMES[nameIdx].length) {
          phase = "waiting";
          timeout = setTimeout(tick, WAIT_MS);
        } else {
          timeout = setTimeout(tick, TYPE_MS);
        }
      }
    }

    timeout = setTimeout(tick, START_DELAY_MS);
    return () => clearTimeout(timeout);
  }, [active]);

  return text;
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [entryDone, setEntryDone] = useState(false);
  const displayedName = useCyclingName(entryDone);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setMounted(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Render a blank screen-height placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return <section className="h-screen bg-[#060d1f]" />;
  }

  const portraitInitial = isMobile
    ? { opacity: 0, x: 0, y: 70 }
    : { opacity: 0, x: 160, y: 0 };

  const textInitial = isMobile
    ? { opacity: 0, x: 0, y: -70 }
    : { opacity: 0, x: -160, y: 0 };

  const slideTransition = {
    duration: 0.75,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  };

  return (
    <section className="relative flex flex-col overflow-hidden pt-16 pb-10 md:pt-20 md:pb-14">
      {/* Background */}
      <div className="absolute inset-0 brightness-75 saturate-200">
        <Image
          src="/img/heaven.jpg"
          alt="A Cloudy Sky seen from an Airplane"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      {/* Fade to dark at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-linear-to-b from-transparent to-[#1f1a52]" />

      {/* All hero content centered as one unit */}
      <div className="relative z-10 flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-10">

          {/* Portrait + Text row */}
          <div className="flex flex-col md:grid md:grid-cols-[400px_400px] items-center gap-8 md:gap-16">

            {/* Portrait — top on mobile, left column on desktop (fixed width so text changes never shift it) */}
            <motion.div
              className="md:justify-self-end"
              initial={portraitInitial}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={slideTransition}
            >
              <div
                className="relative rounded-full border-2 border-white overflow-hidden
                  shadow-[0_0_14px_4px_rgba(255,255,255,0.35)]
                  hover:shadow-[0_0_40px_12px_rgba(255,255,255,0.75)]
                  transition-shadow duration-300"
                style={{ width: 200, height: 200 }}
              >
                <Image
                  src="/img/Me.jpg"
                  alt="Mohamed Matar"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: "70% 50%",
                    transform: `scale(2)`,
                    transformOrigin: "70% 50%",
                  }}
                  priority
                />
              </div>
            </motion.div>

            {/* Text + Button — bottom on mobile, right column on desktop */}
            <motion.div
              className="flex flex-col items-center md:items-start gap-5"
              initial={textInitial}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={slideTransition}
              onAnimationComplete={() => setEntryDone(true)}
            >
              <h1 className="text-white text-[2rem] md:text-[2.5rem] font-light text-center md:text-left leading-tight">
                Salam!
                <br />
                I&apos;m{" "}
                <span className="inline-flex items-baseline">
                  <span>{displayedName}</span>
                  <span
                    className="inline-block w-0.5 bg-white ml-0.5"
                    style={{
                      height: "0.85em",
                      animation: "cursor-blink 1s step-end infinite",
                      verticalAlign: "baseline",
                      marginBottom: "0.05em",
                    }}
                  />
                </span>
              </h1>

              <button
                onClick={scrollToContact}
                className="px-7 py-2 border border-white text-white text-sm rounded
                  shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]
                  hover:shadow-[0_0_28px_8px_rgba(255,255,255,0.65)]
                  transition-shadow duration-300 cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Stars navigation — directly below portrait+text */}
          <StarsNav />
        </div>
      </div>
    </section>
  );
}
