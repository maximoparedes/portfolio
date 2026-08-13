"use client";

import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-20">
      <div className="mb-10">
        <p className="text-sm font-medium text-accent">Trayectoria</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          Experiencia
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                    {job.role}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{job.company}</p>
                </div>
              </div>
              <span className="mt-1 shrink-0 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                {job.period}
              </span>
            </div>

            <ul className="mt-5 space-y-2">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
