import { useEffect, useState } from "react";
import type { ExperiencesModel } from "../../models/experiences/experiences";
import clsx from "clsx";

export function Experiences() {
  const [experiences, setExperiences] = useState<ExperiencesModel[]>([]);

  useEffect(() => {
    async function loadExperiences() {
      const response = await fetch("src/db/seed/experiences/experiences.json");
      const data = await response.json();
      setExperiences(data.experiences);
    }

    loadExperiences();
  }, []);

  return (
    <section
      id="experiences"
      className="min-h-screen flex flex-col my-14 mx-auto px-6 items-center max-w-6xl"
    >
      <div className="w-full md:max-w-6xl">
        <span className="text-zinc-400 text-sm uppercase tracking-widest">
          Experiência
        </span>
        <h2 className="text-white text-3xl font-semibold leading-tight mt-1">
          Onde trabalhei
        </h2>
      </div>

      <div className={clsx("mt-8 flex flex-col gap-6", "md:max-w-6xl px-6")}>
        {experiences.map((experience, index) => (
          <div
            key={`${experience}-${index}`}
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-white text-lg font-semibold">
                {experience.position}
              </h3>
              <span className="text-zinc-400 text-sm">
                {experience.duration}
              </span>
            </div>

            <p className="text-zinc-400 mt-1">{experience.company}</p>

            <p className="text-zinc-300 mt-4 text-sm leading-relaxed">
              {experience.description}
            </p>

            <ul className="mt-4 list-disc list-inside space-y-1 text-zinc-300 text-sm">
              {experience.mainActivities.map((activity, index) => (
                <li key={`${activity}-${index}`}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
