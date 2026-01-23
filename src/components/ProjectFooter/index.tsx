// components/ProjectFooter.tsx
import type { ProjectsModel } from "../../models/projects/projects";

type ProjectProps = {
  project: ProjectsModel;
};

export function ProjectFooter({ project }: ProjectProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {project.stack.tecnologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <a
          href={project.repositoryLink}
          target="_blank"
          className="text-indigo-400 hover:underline"
        >
          Repositório
        </a>

        {project.applicationLink && (
          <a
            href={project.applicationLink}
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            Aplicação
          </a>
        )}
      </div>

      {project.observation && (
        <p className="text-zinc-400 text-xs">{project.observation}</p>
      )}
    </div>
  );
}
