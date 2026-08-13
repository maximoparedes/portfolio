"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:shadow-black/20"
    >
      {project.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
          <Image
            src={project.image}
            alt={`Captura de ${project.title}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="relative flex flex-1 flex-col p-7 sm:p-8">
        <span className="pointer-events-none absolute -right-4 -top-2 text-7xl font-semibold text-zinc-900/[0.03] select-none dark:text-white/[0.04]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <span className="mt-1 shrink-0 text-sm text-zinc-400 dark:text-zinc-600">
            {project.period}
          </span>
        </div>

        <p className="relative mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <ul className="relative mt-4 space-y-1.5">
          {project.highlights.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="relative mt-6 flex flex-wrap gap-3 border-t border-zinc-100 pt-5 dark:border-zinc-800/80">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.primary
                    ? "inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-zinc-900"
                    : "inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
                }
              >
                {link.label.toLowerCase().includes("código") ? (
                  <GithubIcon className="h-3.5 w-3.5" />
                ) : (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
