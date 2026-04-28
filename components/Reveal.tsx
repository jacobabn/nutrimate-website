"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "ul" | "li" | "h2" | "h3" | "p";
};

export function Reveal({ children, delay = 0, y = 12, className, as = "div" }: Props) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </M>
  );
}
