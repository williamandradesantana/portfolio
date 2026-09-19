import { TiSocialLinkedin } from "react-icons/ti";
import { GrGithub } from "react-icons/gr";
import { LinkSection } from "../LinkSection";
import clsx from "clsx";

export function Hero() {
  const secondaryButtonClasses = clsx(
    "flex items-center justify-center gap-1.5 px-5 py-2 rounded-md border border-zinc-700",
    "text-black dark:text-white hover:border-zinc-500 transition",
  );

  return (
    <section className="min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex flex-col items-center justify-center relative text-center gap-6 w-full max-w-3xl px-6">
      <p
        className={clsx(
          "text-zinc-600 dark:text-zinc-300",
          "text-sm md:text-base uppercase tracking-widest",
        )}
      >
        Desenvolvedor Backend
      </p>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black dark:text-white">
        William Santana
      </h1>

      <p className="max-w-2xl text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Construo APIs REST com Java e Spring Boot e com C# e .NET: autenticação,
        banco de dados, testes automatizados e entrega com Docker e CI.
      </p>

      <p className="flex items-center justify-center gap-2 text-sm md:text-base text-zinc-600 dark:text-zinc-300">
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full bg-emerald-500"
        />
        Aracaju/SE. Aberto a vagas Júnior ou Pleno, remoto ou híbrido.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <LinkSection
          linkProps={{
            href: "#projects",
            "aria-label": "Ir para projetos",
            className: clsx(
              "px-5 py-2 rounded-md text-center",
              "bg-black dark:bg-white text-zinc-200 dark:text-zinc-900 font-medium dark:hover:bg-zinc-200 transition",
            ),
          }}
        >
          Ver projetos ↓
        </LinkSection>

        <a
          href="https://github.com/williamandradesantana"
          target="_blank"
          rel="external noreferrer"
          className={secondaryButtonClasses}
        >
          <GrGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/william-andrade-santana/"
          target="_blank"
          rel="external noreferrer"
          className={secondaryButtonClasses}
        >
          <TiSocialLinkedin size={20} />
          LinkedIn
        </a>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-20 text-zinc-400 text-2xl animate-bounce motion-reduce:animate-none"
      >
        ↓
      </span>
    </section>
  );
}
