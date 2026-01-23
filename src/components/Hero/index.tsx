import { TiSocialLinkedin } from "react-icons/ti";
import { LinkSection } from "../LinkSection";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center gap-6 max-w-xl">
      <h3 className="text-zinc-300 text-md uppercase tracking-widest">
        Desenvolvedor FullStack
      </h3>

      <h1 className="text-3xl md:text-5xl font-semibold text-white">
        William Santana
      </h1>

      <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
        Criando soluções eficientes, escaláveis e alinhadas às boas práticas de
        engenharia de software.
      </p>

      <div className="flex gap-4 mt-4">
        <LinkSection
          linkProps={{
            href: "#projects",
            "aria-label": "Ir para projetos",
            className:
              "px-5 py-2 rounded-md bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition",
          }}
        >
          Ver projetos ↓
        </LinkSection>

        <a
          href="https://www.linkedin.com/in/william-andrade-santana/"
          target="_blank"
          rel="external noreferrer"
          className="flex items-center gap-1 px-5 py-2 rounded-md border border-zinc-700 text-white hover:border-zinc-500 transition"
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
