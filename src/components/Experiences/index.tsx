import { useEffect, useState } from "react";
import type { ExperiencesModel } from "../../models/experiences/experiences";
import { SectionList } from "../SectionList";
import { InfoCard } from "../InfoCard";

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
      className="min-h-screen flex flex-col mx-auto px-6 items-center max-w-6xl scroll-mt-24"
    >
      <div className="w-full md:max-w-6xl">
        <span className="text-zinc-600 dark:text-zinc-400 text-sm uppercase tracking-widest">
          Experiência
        </span>
        <h2 className="text-zinc-900 dark:text-white text-3xl font-semibold leading-tight mt-1">
          Onde trabalhei
        </h2>
      </div>

      <SectionList>
        {experiences.map((experience, index) => (
          <InfoCard
            key={`${experience}-${index}`}
            title={experience.position}
            subtitle={experience.company}
            meta={experience.duration}
            description={experience.description}
            footer={
              <ul className="list-disc list-inside space-y-1 text-zinc-500 dark:text-zinc-300 text-sm">
                {experience.mainActivities.map((activity, index) => (
                  <li key={`${activity}-${index}`}>{activity}</li>
                ))}
              </ul>
            }
          />
        ))}
      </SectionList>
    </section>
  );
}
