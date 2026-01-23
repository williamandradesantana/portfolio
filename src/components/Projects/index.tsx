import { useEffect, useState } from "react";
import { SectionList } from "../SectionList";
import type { ProjectsModel } from "../../models/projects/projects";
import { ProjectFooter } from "../ProjectFooter";
import { InfoCard } from "../InfoCard";

export function Projects() {
  const [projects, setProjects] = useState<ProjectsModel[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await fetch("src/db/seed/projects/projects.json");
      const data = await response.json();
      setProjects(data.projects);
    }

    loadProjects();
  }, []);
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col mx-auto px-6 items-center max-w-6xl"
    >
      <div className="w-full md:max-w-6xl">
        <span className="text-zinc-400 text-sm uppercase tracking-widest">
          Projetos
        </span>
        <h2 className="text-white text-3xl font-semibold leading-tight mt-1">
          Trabalhos relacionados
        </h2>
      </div>

      <SectionList>
        {projects.map((project, index) => (
          <InfoCard
            key={`${project}-${index}`}
            title={project.name}
            description={project.description}
            footer={<ProjectFooter project={project} />}
          />
        ))}
      </SectionList>
    </section>
  );
}
