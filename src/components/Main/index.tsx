import { About } from "../About";
import { CertificationsAndEducation } from "../CertificationsAndEducation";
import { Experiences } from "../Experiences";
import { Hero } from "../Hero";
import { Projects } from "../Projects";
import { Skills } from "../Skills";

export function Main() {
  return (
    <main className="flex-1 flex flex-col items-center mx-auto justify-center px-6">
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <CertificationsAndEducation />
      <Skills />
    </main>
  );
}
