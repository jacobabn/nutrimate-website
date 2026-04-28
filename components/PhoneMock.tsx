"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BrandMark } from "./BrandMark";

const TIP = "38 g of protein in by 9 am, nice. Skyr + a scoop later keeps the day on track.";

export function PhoneMock() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-10%" });
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setTyped(TIP); return; }
    let i = 0;
    let t: number | undefined;
    const tick = () => {
      i++;
      setTyped(TIP.slice(0, i));
      if (i < TIP.length) t = window.setTimeout(tick, 22 + Math.random() * 18);
    };
    const start = window.setTimeout(tick, 350);
    return () => { window.clearTimeout(start); if (t) window.clearTimeout(t); };
  }, [inView]);

  return (
    <div ref={wrapRef} className="relative justify-self-center lg:justify-self-end">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        className="phone"
      >
        <div className="phone-screen">
          <div className="absolute top-2 inset-x-0 flex items-center justify-between px-7 z-10 mono text-[10px] text-ink/70">
            <span>9:41</span>
            <span>●●●● 100%</span>
          </div>

          <div className="pt-14 px-6">
            <div className="meta">Good morning</div>
            <div className="font-extrabold tracking-tighter2 text-[26px] leading-[1.1] mt-1">Maya</div>
            <div className="text-[13px] text-muted mt-1">Goal: lean a bit. 2 of 7 days this week logged.</div>

            <div className="mt-5 flex items-center gap-4">
              <div className="ring-wrap" aria-hidden="true">
                <svg viewBox="0 0 200 200" width="168" height="168">
                  <defs>
                    <linearGradient id="kring" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F06292"/>
                      <stop offset="100%" stopColor="#FE9A8E"/>
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="84" fill="none" stroke="#F4E5EB" strokeWidth="14"/>
                  <circle
                    cx="100" cy="100" r="84"
                    fill="none" stroke="url(#kring)"
                    strokeWidth="14" strokeLinecap="round"
                    strokeDasharray="528"
                    strokeDashoffset="528"
                    transform="rotate(-90 100 100)"
                    className="animate-kcalFill"
                  />
                </svg>
                <div className="num">
                  <div className="font-extrabold tracking-tighter3 text-[36px] leading-none">1,420</div>
                  <div className="meta mt-1">of 1,940 kcal</div>
                </div>
              </div>
              <div className="flex-1 min-w-0 flex flex-col gap-3">
                <MacroBar label="Protein" cur={92}  goal={130} color="#F06292" />
                <MacroBar label="Carbs"   cur={158} goal={220} color="#F8AC9C" />
                <MacroBar label="Fat"     cur={41}  goal={65}  color="#8DD9D5" />
              </div>
            </div>

            <div className="mt-5 card border-line p-3.5 pr-4">
              <div className="flex items-start gap-3">
                <BrandMark size={28} className="shrink-0" />
                <div>
                  <div className="meta">Daily tip · 9:42</div>
                  <p className="text-[13.5px] leading-[1.5] text-ink mt-0.5 min-h-[42px]">
                    {typed}{typed.length < TIP.length && <span className="caret" />}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              <MealRow emoji="🥣" name="Skyr + berries" meta="8:14 · 240 kcal · 22 g P" />
              <MealRow emoji="🍳" name="2 eggs, 1 toast" meta="9:01 · 320 kcal · 16 g P" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute -top-2 -right-3 animate-float card border-line px-3 py-2 flex items-center gap-2 shadow-lift"
      >
        <span className="w-2 h-2 rounded-full bg-ok" />
        <span className="text-[12px] font-semibold">On pace</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -bottom-3 -left-4 animate-float card border-line px-3 py-2 flex items-center gap-2 shadow-lift"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="text-[14px]">📷</span>
        <span className="text-[12px] font-semibold">Photo logged</span>
      </motion.div>
    </div>
  );
}

function MacroBar({ label, cur, goal, color }: { label: string; cur: number; goal: number; color: string }) {
  const pct = Math.max(0, Math.min(100, Math.round((cur / goal) * 100)));
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink2">{label}</span>
        <span className="mono text-[11px] text-muted tabular-nums">
          <span className="text-ink font-semibold">{cur}</span>
          <span className="text-subtle"> / {goal} g</span>
        </span>
      </div>
      <div className="mt-1.5 h-1.5 rounded-full bg-line2/40 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

function MealRow({ emoji, name, meta }: { emoji: string; name: string; meta: string }) {
  return (
    <div className="flex items-center gap-3 card border-line px-3 py-2.5">
      <span className="text-[18px]">{emoji}</span>
      <div className="flex-1">
        <div className="text-[13.5px] font-semibold">{name}</div>
        <div className="meta">{meta}</div>
      </div>
    </div>
  );
}
