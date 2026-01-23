import { GraduationCap, Star } from "lucide-react";
import { SectionList } from "../SectionList";
import { useEffect, useState } from "react";
import type { EducationModel } from "../../models/education/education";
import type { CertificationsModel } from "../../models/certifications/certifications";
import { InfoCard } from "../InfoCard";

export function CertificationsAndEducation() {
  const [education, setEducation] = useState<EducationModel>();
  const [certifications, setCertifications] = useState<CertificationsModel[]>(
    [],
  );

  useEffect(() => {
    async function loadEducation() {
      const response = await fetch("src/db/seed/education/education.json");
      const data = await response.json();
      setEducation(data.education);
    }

    loadEducation();
  }, []);

  useEffect(() => {
    async function loadCertifications() {
      const response = await fetch(
        "src/db/seed/certifications/certifications.json",
      );
      const data = await response.json();
      setCertifications(data.certifications);
    }

    loadCertifications();
  }, []);

  return (
    <section
      id="certifications"
      className="flex flex-col mt-12 mx-auto px-6 items-center w-full max-w-6xl scroll-mt-24"
    >
      <div className="w-full md:max-w-6xl">
        <span className="text-zinc-600 dark:text-zinc-400 text-sm uppercase tracking-widest">
          Certificações
        </span>

        <h2 className="text-zinc-900 dark:text-white text-3xl font-semibold leading-tight mt-1">
          Educação e Certificados
        </h2>
      </div>

      <div className="w-full mt-12">
        <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-500 uppercase">
          <GraduationCap size={16} />
          Educação
        </h3>

        <SectionList>
          {education && (
            <InfoCard
              key={education.graduation}
              title={education.graduation}
              description={education.description}
              footer={
                <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
                  <span>{education.institution}</span>
                  <span>{education.duration}</span>
                </div>
              }
            />
          )}
        </SectionList>
      </div>

      <div className="w-full mt-12">
        <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-500 uppercase">
          <Star size={16} />
          Certificados
        </h3>

        <SectionList>
          {certifications.map((certification, index) => (
            <InfoCard
              key={`${certification.name}-${index}`}
              title={certification.name}
              description={certification.institution}
              footer={
                <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
                  <span>{certification.yearOfCompletion}</span>

                  {certification.link && (
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      text-zinc-700 dark:text-zinc-300
                      hover:text-zinc-900 dark:hover:text-white
                      underline-offset-4 hover:underline
                      transition
                    "
                    >
                      Ver certificados
                    </a>
                  )}
                </div>
              }
            />
          ))}
        </SectionList>
      </div>
    </section>
  );
}
