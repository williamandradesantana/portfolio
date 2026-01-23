import clsx from "clsx";
import { useEffect, useState } from "react";
import type { StackModel } from "../../models/stack/stack";
import { Span } from "../Span";

export function About() {
  const commomParagraphClasses = "text-zinc-300";

  const [stack, setStack] = useState<StackModel>();

  useEffect(() => {
    async function loadStack() {
      const response = await fetch("src/db/seed/stack/stack.json");
      const data = await response.json();
      setStack(data.stack);
    }

    loadStack();
  }, []);

  return (
    <section
      id="about"
      className={clsx(
        "grid grid-cols-1 min-h-screen scroll-mt-24",
        "lg:grid-cols-2 lg:gap-16",
        "max-w-6xl mx-auto px-6",
      )}
    >
      <div className="flex flex-col gap-4 max-w-lg">
        <span className="text-zinc-400 text-sm uppercase tracking-widest">
          Sobre mim
        </span>

        <h2 className="text-white text-3xl font-semibold leading-tight">
          Um pouco sobre minha trajetória
        </h2>

        <p className={commomParagraphClasses}>
          Sou desenvolvedor full stack com foco em backend, atuando na criação
          de soluções escaláveis e bem estruturadas, principalmente em
          plataformas educacionais e automação de processos.
        </p>

        <p className={commomParagraphClasses}>
          Minha principal especialidade está no desenvolvimento backend com
          <strong className="text-white font-medium">
            {" "}
            Java e Spring Boot
          </strong>
          , além de experiência com{" "}
          <strong className="text-white font-medium">Python e Django</strong>.
        </p>

        <p className={commomParagraphClasses}>
          No frontend, tenho concentrado meus estudos e projetos em
          <strong className="text-white font-medium">
            {" "}
            React com TypeScript
          </strong>
          , buscando interfaces simples, funcionais e bem organizadas.
        </p>

        <p className={commomParagraphClasses}>
          Sou movido por desafios que exigem boas práticas, pensamento crítico e
          soluções criativas, sempre em busca de evolução técnica e pessoal.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-zinc-400 text-sm">Stack que utilizo</h3>
        <div className="flex flex-wrap gap-2">
          {stack?.tecnologies.map((technology, index) => (
            <Span key={`${technology}-${index}`}>{technology}</Span>
          ))}
        </div>
      </div>
    </section>
  );
}
