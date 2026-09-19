import type { ProjectsModel } from "../../models/projects/projects";

type ProjectProps = {
  project: ProjectsModel;
};

export function ProjectFooter({ project }: ProjectProps) {
  const linkClasses =
    "text-indigo-700 dark:text-indigo-400 font-medium hover:underline underline-offset-4";

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {project.stack.tecnologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs md:text-sm rounded bg-zinc-800 text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm md:text-base">
        <a
          href={project.repositoryLink}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          Repositório
        </a>

        {project.applicationLink && (
          <a
            href={project.applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            Aplicação
          </a>
        )}
      </div>

      {project.observation && (
        <p className="text-zinc-700 dark:text-zinc-400 text-sm">
          {project.observation}
        </p>
      )}
    </div>
  );
}
