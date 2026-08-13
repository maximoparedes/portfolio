import type { LucideIcon } from "lucide-react";
import { Bot, GraduationCap, Receipt, Wallet } from "lucide-react";

export type Project = {
  title: string;
  period: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string; primary?: boolean }[];
};

export const projects: Project[] = [
  {
    title: "Recibos Monotributo",
    period: "2026",
    icon: Receipt,
    description:
      "Aplicación full-stack para generar comprobantes en PDF para monotributistas, con autenticación de usuarios y persistencia en base de datos. Deployada en producción con CI/CD automático.",
    highlights: [
      "Numeración correlativa atómica de comprobantes mediante una función de PostgreSQL, segura ante escrituras concurrentes",
      "Autenticación con Auth.js y acceso a datos protegido server-side (RLS)",
      "Pipeline de CI/CD con Vercel + GitHub: deploy automático a producción y preview deployments por PR",
    ],
    stack: ["Next.js 16", "TypeScript", "Supabase / PostgreSQL", "Auth.js", "Tailwind CSS"],
    links: [
      { label: "Demo en vivo", href: "https://recibos-monotributo.vercel.app", primary: true },
      { label: "Código fuente", href: "https://github.com/maximoparedes/recibos-monotributo" },
    ],
  },
  {
    title: "Organizador de PC",
    period: "2026",
    icon: Bot,
    description:
      "Herramienta de automatización que monitorea carpetas del sistema en tiempo real y clasifica archivos automáticamente usando un modelo de lenguaje, generando categorías dinámicas en vez de reglas fijas.",
    highlights: [
      "Servicio persistente en segundo plano con detección de cambios por eventos y reconciliación periódica",
      "Clasificación de documentos vía Claude API con categorías inventadas dinámicamente según el contenido",
      "CLI de mantenimiento del sistema (temporales, duplicados, programas instalados) con modo simulación por defecto",
    ],
    stack: ["Python", "Claude API", "watchdog"],
    links: [
      { label: "Código fuente", href: "https://github.com/maximoparedes/organizadorDescargas", primary: true },
    ],
  },
  {
    title: "GastosApp",
    period: "2026",
    icon: Wallet,
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
    icon: GraduationCap,
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

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/maximoparedes" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maximo-paredes-baabb2279/" },
  { label: "Email", href: "mailto:maximoparedess05@gmail.com" },
];
