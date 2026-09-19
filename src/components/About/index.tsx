import clsx from "clsx";
import { useEffect, useState } from "react";
import type { StackModel } from "../../models/stack/stack";
import { Span } from "../Span";

export function About() {
  const commomParagraphClasses =
    "text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400";
  const strongClasses = "text-zinc-900 dark:text-white font-medium";

  const [stack, setStack] = useState<StackModel>();

  useEffect(() => {
    async function loadStack() {
      const response = await fetch("/db/seed/stack/stack.json");
      const data = await response.json();
      setStack(data.stack);
    }

    loadStack();
  }, []);

  return (
    <section
      id="about"
      className={clsx(
        "grid grid-cols-1 scroll-mt-24",

        "lg:grid-cols-2 gap-8 lg:gap-16",
        "max-w-6xl mx-auto my-12 px-6",
      )}
    >
      <div className="flex flex-col gap-4 max-w-xl">
        <span className="text-zinc-600 dark:text-zinc-400 text-sm uppercase tracking-widest">
          Sobre mim
        </span>

        <h2 className="text-zinc-900 dark:text-white text-3xl md:text-4xl font-semibold leading-tight">
          Um pouco sobre minha trajetória
        </h2>

        <p className={commomParagraphClasses}>
          Sou desenvolvedor backend e trabalho com{" "}
          <strong className={strongClasses}>Java (Spring Boot)</strong> e{" "}
          <strong className={strongClasses}>C# (.NET)</strong>. Nos últimos 2
          anos desenvolvi APIs REST e automações para clientes reais: uma
          construtora, uma empresa do mercado financeiro e plataformas de
          educação.
        </p>

        <p className={commomParagraphClasses}>
          Nos projetos pessoais uso o que o mercado pede: Spring Security com
          OAuth2/JWT e Keycloak, JPA/Hibernate, PostgreSQL, Flyway, testes com
          JUnit 5, Mockito e Testcontainers, CI no GitHub Actions, Docker e
          Terraform. Também montei uma arquitetura de microsserviços com
          RabbitMQ.
        </p>

        <p className={commomParagraphClasses}>
          Curso Ciência da Computação na UNIT (previsão jun/2027) e participo de
          iniciação científica com IA e RAG. Procuro vaga de Desenvolvedor
          Backend Júnior ou Pleno, remoto ou em Aracaju.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-zinc-700 dark:text-zinc-300 text-base font-medium">
          Stack que utilizo
        </h3>

        <div className="flex flex-wrap gap-2">
          {stack?.tecnologies.map((technology, index) => (
            <Span key={`${technology}-${index}`}>{technology}</Span>
          ))}
        </div>
      </div>
    </section>
  );
}
