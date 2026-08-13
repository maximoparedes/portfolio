export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Lemon",
    role: "Analista KYC / Onboarding",
    period: "Septiembre 2025 — Actualidad",
    points: [
      "Validación de identidad de usuarios en el proceso de onboarding, cruzando datos contra RENAPER (Registro Nacional de las Personas)",
      "Verificación biométrica de coincidencia rostro-documento para prevenir suplantación de identidad, tanto en altas nuevas como en revalidaciones de cuentas ya existentes",
    ],
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  note: string;
};

export const education: EducationItem[] = [
  {
    institution: "UADE",
    degree: "Ingeniería en Informática",
    period: "2024 — Actualidad",
    note: "Cursando 3er año",
  },
];
