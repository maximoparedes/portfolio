import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { contactLinks } from "@/lib/projects";

const ICONS = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Email: Mail };

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {contactLinks.map((link) => {
        const Icon = ICONS[link.label as keyof typeof ICONS];
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            <span className="absolute inset-0 scale-75 rounded-full bg-zinc-900/5 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-white/10" />
            <Icon className="relative h-[18px] w-[18px]" strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}
