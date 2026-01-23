import { About } from "../About";
import { Experiences } from "../Experiences";
import { Hero } from "../Hero";

export function Main() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6">
      <Hero />
      <About />
      <Experiences />
    </main>
  );
}
