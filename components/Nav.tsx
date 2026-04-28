"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";

const items = [
  { href: "#how",     label: "How it works" },
  { href: "#coach",   label: "Coach" },
  { href: "#goals",   label: "Goals" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq",     label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? "nav-blur" : ""}`}>
      <div className="shell flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark size={32} />
          <span className="font-extrabold tracking-tighter3 text-[19px]">NutriMate</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[14.5px] font-medium text-ink2">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-ink transition-colors">{i.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#download" className="btn-pink h-10 px-4 text-[14px] hidden sm:inline-flex">
            <AppleGlyph />
            Download
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-line bg-white"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open
                ? (<><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>)
                : (<><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>)}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden nav-blur border-t border-line">
          <div className="shell py-4 grid gap-3">
            {items.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="text-[16px] font-semibold py-2">
                {i.label}
              </a>
            ))}
            <a href="#download" onClick={() => setOpen(false)} className="btn-pink w-full">Download</a>
          </div>
        </div>
      )}
    </header>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M16.36 12.71c-.02-2.16 1.77-3.2 1.85-3.25-1.01-1.47-2.58-1.67-3.13-1.69-1.34-.13-2.61.79-3.29.79-.68 0-1.73-.77-2.85-.74-1.46.02-2.81.85-3.56 2.16-1.52 2.63-.39 6.51 1.1 8.65.72 1.04 1.59 2.21 2.71 2.17 1.09-.04 1.5-.7 2.82-.7s1.7.7 2.85.68c1.18-.02 1.92-1.06 2.64-2.1.83-1.21 1.18-2.38 1.2-2.45-.03-.01-2.3-.88-2.34-3.52ZM14.27 6.33c.6-.73 1-1.74.89-2.74-.86.04-1.91.57-2.53 1.29-.55.64-1.04 1.68-.91 2.66.96.07 1.95-.49 2.55-1.21Z"/>
    </svg>
  );
}
