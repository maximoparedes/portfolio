import { SocialIcons } from "@/components/SocialIcons";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/70 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Máximo Paredes
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="#proyectos"
            className="hidden text-sm text-zinc-600 transition-colors hover:text-zinc-900 sm:inline dark:text-zinc-400 dark:hover:text-white"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="hidden text-sm text-zinc-600 transition-colors hover:text-zinc-900 sm:inline dark:text-zinc-400 dark:hover:text-white"
          >
            Contacto
          </a>
          <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800" />
          <SocialIcons />
        </nav>
      </div>
    </header>
  );
}
