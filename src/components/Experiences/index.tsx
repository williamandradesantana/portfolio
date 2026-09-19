import { useEffect, useState } from "react";
import type { ExperiencesModel } from "../../models/experiences/experiences";
import { SectionList } from "../SectionList";
import { InfoCard } from "../InfoCard";

const MAX_LABEL_LENGTH = 30;

function ActivityItem({ activity }: { activity: string }) {
  const separatorIndex = activity.indexOf(": ");
  const hasLabel = separatorIndex > 0 && separatorIndex <= MAX_LABEL_LENGTH;

  if (!hasLabel) return <>{activity}</>;

  return (
    <>
      <strong className="font-semibold text-zinc-900 dark:text-white">
        {activity.slice(0, separatorIndex)}:
      </strong>{" "}
      {activity.slice(separatorIndex + 2)}
    </>
  );
}

export function Experiences() {
  const [experiences, setExperiences] = useState<ExperiencesModel[]>([]);

  useEffect(() => {
    async function loadExperiences() {
      const response = await fetch("/db/seed/experiences/experiences.json");
      const data = await response.json();
      setExperiences(data.experiences);
    }

    loadExperiences();
  }, []);

  return (
    <section
      id="experiences"
      className="flex flex-col my-12 mx-auto px-6 items-center max-w-6xl scroll-mt-24"
    >
      <div className="w-full md:max-w-6xl">
        <span className="text-zinc-600 dark:text-zinc-400 text-sm uppercase tracking-widest">
          Experiência
        </span>
        <h2 className="text-zinc-900 dark:text-white text-3xl md:text-4xl font-semibold leading-tight mt-1">
          Onde trabalhei
        </h2>
      </div>

      <SectionList>
        {experiences.map((experience, index) => (
          <InfoCard
            key={`${experience.company}-${index}`}
            title={experience.position}
            subtitle={experience.company}
            meta={experience.duration}
            description={experience.description}
            footer={
              <ul className="list-disc list-outside pl-5 space-y-2 text-zinc-700 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                {experience.mainActivities.map((activity, index) => (
                  <li key={`${activity}-${index}`}>
                    <ActivityItem activity={activity} />
                  </li>
                ))}
              </ul>
            }
          />
        ))}
      </SectionList>
    </section>
  );
}
