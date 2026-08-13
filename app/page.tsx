import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SocialIcons } from "@/components/SocialIcons";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Nav />
      <Hero />

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-24 sm:px-8">
        <Experience />

        <section id="proyectos" className="mt-24 scroll-mt-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium text-accent">Selección</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                Proyectos
              </h2>
            </div>
            <span className="hidden text-sm text-zinc-400 sm:inline dark:text-zinc-600">
              {projects.length} proyectos
            </span>
          </div>

          <ProjectsGrid />
        </section>
      </main>

      <footer
        id="contacto"
        className="scroll-mt-20 border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 py-12 text-center sm:px-8">
          <h2 className="text-xl font-semibold tracking-tight">
            ¿Charlamos sobre un proyecto?
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Estoy abierto a nuevas oportunidades y colaboraciones. Escribime por
            cualquiera de estos medios.
          </p>
          <SocialIcons className="mt-1" />
          <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-600">
            © {new Date().getFullYear()} Máximo Paredes
          </p>
        </div>
      </footer>
    </div>
  );
}
