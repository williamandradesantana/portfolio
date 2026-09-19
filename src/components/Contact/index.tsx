import clsx from "clsx";
import { Mail } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";

export function Contact() {
  const socialLinkClasses =
    "flex items-center gap-2 text-zinc-900 hover:underline underline-offset-4 dark:text-white transition";

  return (
    <section
      id="contact"
      className="flex flex-col mx-6 my-30 px-6 items-center max-w-6xl text-center scroll-mt-24"
    >
      <header className="w-full flex flex-col gap-4 max-w-3xl">
        <span className="text-zinc-600 dark:text-zinc-400 text-sm uppercase tracking-widest">
          Contato
        </span>

        <h2 className="text-zinc-900 dark:text-white text-3xl md:text-4xl font-semibold leading-tight">
          Vamos trabalhar juntos!
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
          Estou buscando uma vaga de Desenvolvedor Backend Júnior ou Pleno,
          remoto ou híbrido, com base em Aracaju/SE. Se a sua equipe trabalha
          com Java e Spring Boot ou com C# e .NET, vamos conversar.
        </p>
      </header>

      <a
        href="mailto:williamandrade1058@gmail.com"
        className={clsx(
          "mt-10 inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3",
          "text-zinc-600 dark:text-zinc-300 transition",
          "hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white",
        )}
      >
        <Mail size={18} />
        williamandrade1058@gmail.com
      </a>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
        <a
          href="https://github.com/williamandradesantana"
          target="_blank"
          rel="noopener noreferrer"
          className={socialLinkClasses}
          aria-label="GitHub"
        >
          <GrGithub size={18} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/william-andrade-santana/"
          target="_blank"
          rel="noopener noreferrer"
          className={socialLinkClasses}
          aria-label="LinkedIn"
        >
          <TiSocialLinkedin size={20} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
