"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
