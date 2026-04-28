"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandMark } from "./BrandMark";

type Intensity = "easy" | "medium" | "hard";

const ORDER: Intensity[] = ["easy", "medium", "hard"];

const COPY: Record<Intensity, string> = {
  easy:   "Halfway through the day, halfway to your kcal. Solid pace, Maya. A snack with 20 g protein after work would close it nicely.",
  medium: "Protein is at 58 g. Target is 130. Two real meals left, both need 35+ g each. Cottage cheese, chicken thigh, tofu, pick one.",
  hard:   "Three logs. No protein hit yet. Champ, the goal won't shift itself. Cottage cheese, 200 g, before the next coffee.",
};

export function IntensityRotor() {
  const [active, setActive] = useState<Intensity>("easy");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      setActive((prev) => ORDER[(ORDER.indexOf(prev) + 1) % ORDER.length]);
    }, 4200);
    return () => window.clearInterval(t);
  }, [paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="meta mb-3">Push intensity · same day, three voices</div>

      <div className="card p-1 inline-flex rounded-full border-line bg-card mb-6">
        {ORDER.map((k) => (
          <button
            key={k}
            type="button"
            aria-pressed={active === k}
            onClick={() => setActive(k)}
            className={`px-4 h-9 rounded-full text-[13px] font-semibold transition-colors capitalize ${
              active === k ? "bg-ink text-white" : "text-muted hover:text-ink"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute inset-x-0 -top-3 -bottom-3 bg-soft-pink rounded-[36px] -z-10 blur-[2px] opacity-70" />
        <div className="grid gap-3 p-4 min-h-[260px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
              className="notif"
            >
              <div className="flex items-center gap-2.5">
                <BrandMark size={24} />
                <span className="font-bold text-[13px]">NutriMate</span>
                <span className="meta ml-auto">now</span>
              </div>
              <p className="text-[14px] leading-[1.5] mt-2">{COPY[active]}</p>
            </motion.div>
          </AnimatePresence>

          <div className="grid grid-cols-3 gap-2 mt-2">
            {ORDER.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setActive(k)}
                className={`h-1.5 rounded-full transition-colors ${active === k ? "bg-ink" : "bg-line2/60"}`}
                aria-label={`Show ${k} intensity`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="meta mt-4">You pick the tone. We never insult, we just match the level you signed up for.</p>
    </div>
  );
}
