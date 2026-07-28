"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { FooterColumn } from "@/content/footer";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FooterNavColumnProps {
  column: FooterColumn;
  index: number;
}

/** One glass navigation column — Company / Services / Resources. */
export function FooterNavColumn({ column, index }: FooterNavColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: easePremium }}
      className="border-border-subtle bg-surface/60 flex flex-col gap-3 rounded-[24px] border p-6 backdrop-blur-xl"
    >
      <h4 className="text-caption text-foreground-secondary font-semibold tracking-wide uppercase">{column.title}</h4>
      {/* Long lists (Services) wrap into two columns so one column never
       * towers over its neighbors and blows the compact height budget. */}
      <ul className={cn("gap-x-4 gap-y-2", column.links.length > 8 ? "grid grid-cols-2" : "flex flex-col")}>
        {column.links.map((link) =>
          link.disabled ? (
            <li key={link.label}>
              <span className="text-body-sm text-foreground-secondary/50 cursor-not-allowed">{link.label}</span>
            </li>
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "text-body-sm text-foreground-secondary hover:text-foreground relative inline-block transition-colors duration-fast",
                  "hover:before:bg-gradient-brand before:absolute before:-bottom-0.5 before:left-0 before:h-px before:w-0 before:transition-[width] before:duration-base hover:before:w-full",
                )}
              >
                {link.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </motion.div>
  );
}
