"use client";

import { motion } from "motion/react";
import { ArrowDown, Mail, Sparkle } from "lucide-react";
import { SocialIcons } from "@/components/SocialIcons";

const EASE = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: EASE },
  };
}

export function Hero() {
  return (
    <section
      id="top"
      className="spotlight relative overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 text-zinc-950/[0.035] dark:text-white/[0.035]" />
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col px-6 py-24 sm:px-8 sm:py-32">
        <motion.span
          {...fadeUp(0)}
          className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
        >
          <Sparkle className="h-3.5 w-3.5" strokeWidth={2} />
          Full-stack developer
        </motion.span>

        <motion.h1
          {...fadeUp(0.08)}
          className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-white"
        >
          Máximo Paredes
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          Construyo aplicaciones full-stack de punta a punta — desde el modelo de
          datos hasta el deploy — con foco en integraciones de{" "}
          <span className="text-zinc-900 dark:text-zinc-200">IA</span> y{" "}
          <span className="text-zinc-900 dark:text-zinc-200">automatización</span>.
        </motion.p>

        <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/10 dark:bg-white dark:text-zinc-900"
          >
            Ver proyectos
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="mailto:maximoparedess05@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Contactarme
          </a>
          <SocialIcons className="ml-1" />
        </motion.div>
      </div>
    </section>
  );
}
