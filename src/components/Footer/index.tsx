import clsx from "clsx";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={clsx(
        "flex flex-col items-center justify-center w-full gap-1 border-t p-6 text-center",
        "sm:flex-row sm:gap-8",
        "md:gap-10",
        "lg:gap-12",

        "border-zinc-200 bg-white/80 backdrop-blur",
        "dark:border-zinc-800 dark:bg-zinc-900/80",
      )}
    >
      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        &copy; {currentYear} William Santana. Todos os direitos reservados.
      </p>
      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        Feito com React, TypeScript e Tailwind CSS
      </p>
    </footer>
  );
}
