import { TiSocialLinkedin } from "react-icons/ti";
import { LinkSection } from "../LinkSection";
import clsx from "clsx";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative text-center gap-6 w-full max-w-3xl px-6">
      <h3
        className={clsx(
          "text-zinc-500 dark:text-zinc-300",
          "text-sm md:text-md uppercase tracking-widest",
        )}
      >
        Desenvolvedor FullStack
      </h3>

      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white">
        William Santana
      </h1>

      <p className="text-md md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
        Criando soluções eficientes, escaláveis e alinhadas às boas práticas de
        engenharia de software.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <LinkSection
          linkProps={{
            href: "#projects",
            "aria-label": "Ir para projetos",
            className: clsx(
              "px-5 py-2 rounded-md",
              "bg-black dark:bg-white text-zinc-200 dark:text-zinc-900 font-medium dark:hover:bg-zinc-200 transition",
            ),
          }}
        >
          Ver projetos ↓
        </LinkSection>

        <a
          href="https://www.linkedin.com/in/william-andrade-santana/"
          target="_blank"
          rel="external noreferrer"
          className="flex items-center gap-1 px-5 py-2 rounded-md border border-zinc-700 text-black dark:text-white hover:border-zinc-500 transition"
        >
          <TiSocialLinkedin />
          LinkedIn
        </a>
      </div>

      <span className="absolute bottom-20 text-zinc-400 text-2xl animate-bounce">
        ↓
      </span>
    </section>
  );
}
