import { useEffect, useState } from "react";
import type { SkillsModel } from "../../models/skills/skills";

export function Skills() {
  const [skills, setSkills] = useState<SkillsModel[]>([]);

  useEffect(() => {
    async function loadSkills() {
      const response = await fetch("/db/seed/skills/skills.json");
      const data = await response.json();
      setSkills(data.skills);
    }
    loadSkills();
  }, []);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <header className="mb-16">
        <span className="text-zinc-600 dark:text-zinc-400 text-md uppercase tracking-[0.2em]">
          Skills
        </span>
        <h2 className="mt-2 text-4xl font-semibold text-zinc-900 dark:text-white">
          Tecnologias que uso
        </h2>
      </header>

      <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill.type} className="space-y-4">
            <h3 className="text-zinc-700 dark:text-zinc-300 font-medium">
              {skill.type}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.tecnologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    bg-zinc-900/80
                    px-4
                    py-1.5
                    text-sm
                    text-zinc-100
                    dark:text-zinc-300
                    border
                    border-zinc-800
                    backdrop-blur
                    transition-colors
                    hover:bg-zinc-800
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
