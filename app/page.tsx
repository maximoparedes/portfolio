type Project = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Recibos Monotributo",
    period: "2026",
    description:
      "Aplicación full-stack para generar comprobantes en PDF para monotributistas, con autenticación de usuarios y persistencia en base de datos. Deployada en producción con CI/CD automático.",
    highlights: [
      "Numeración correlativa atómica de comprobantes mediante una función de PostgreSQL, segura ante escrituras concurrentes",
      "Autenticación con Auth.js y acceso a datos protegido server-side (RLS)",
      "Pipeline de CI/CD con Vercel + GitHub: deploy automático a producción y preview deployments por PR",
    ],
    stack: ["Next.js 16", "TypeScript", "Supabase / PostgreSQL", "Auth.js", "Tailwind CSS"],
    links: [
      { label: "Demo en vivo", href: "https://recibos-monotributo.vercel.app" },
      { label: "Código fuente", href: "https://github.com/maximoparedes/recibos-monotributo" },
    ],
  },
  {
    title: "Organizador de PC",
    period: "2026",
    description:
      "Herramienta de automatización que monitorea carpetas del sistema en tiempo real y clasifica archivos automáticamente usando un modelo de lenguaje, generando categorías dinámicas en vez de reglas fijas.",
    highlights: [
      "Servicio persistente en segundo plano con detección de cambios por eventos y reconciliación periódica",
      "Clasificación de documentos vía Claude API con categorías inventadas dinámicamente según el contenido",
      "CLI de mantenimiento del sistema (temporales, duplicados, programas instalados) con modo simulación por defecto",
    ],
    stack: ["Python", "Claude API", "watchdog"],
    links: [
      { label: "Código fuente", href: "https://github.com/maximoparedes/organizadorDescargas" },
    ],
  },
  {
    title: "GastosApp",
    period: "2026",
    description:
      "Dashboard personal de seguimiento de gastos con visualizaciones de datos y control de presupuesto por categoría, con persistencia local en el navegador.",
    highlights: [
      "Dashboard con gráficos interactivos (Recharts) y ranking de categorías",
      "Formularios validados end-to-end con react-hook-form + Zod",
      "Modo oscuro con script anti-flash y theming vía CSS de Tailwind v4",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Recharts", "Zod"],
    links: [],
  },
  {
    title: "UADE Tracker",
    period: "2026",
    description:
      "Aplicación para gestionar la cursada universitaria: materias, evaluaciones y estado de cursada a lo largo de múltiples cuatrimestres, con detección de conflictos de fechas.",
    highlights: [
      "Detección automática de conflictos de fechas entre evaluaciones de distintas materias",
      "Vistas de Dashboard, Calendario, Timeline y gestión de Materias (CRUD completo)",
      "Diseño propio tipo 'blueprint' con grilla técnica y tipografía monoespaciada",
    ],
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    links: [],
  },
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/maximoparedes" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maximo-paredes-baabb2279/" },
  { label: "Email", href: "mailto:maximoparedess05@gmail.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20 sm:px-8">
        <header className="mb-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Máximo Paredes
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Desarrollo aplicaciones full-stack con Next.js, integraciones con IA y
            herramientas de automatización.
          </p>
          <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <section>
          <h2 className="mb-8 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Proyectos
          </h2>
          <div className="flex flex-col gap-10">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border-t border-zinc-200 pt-8 dark:border-zinc-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-500">
                    {project.period}
                  </span>
                </div>

                <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          © {new Date().getFullYear()} Máximo Paredes
        </footer>
      </main>
    </div>
  );
}
