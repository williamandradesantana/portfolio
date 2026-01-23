import clsx from "clsx";

export function Footer() {
  return (
    <footer
      className={clsx(
        "flex items-center justify-center w-full gap-6 border-t p-6",
        "sm:gap-8",
        "md:gap-10",
        "lg:gap-12",

        "border-zinc-200 bg-white/80 backdrop-blur",
        "dark:border-zinc-800 dark:bg-zinc-900/80",
      )}
    >
      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        &copy; William Santana. Todos os direitos reservados.
      </p>
      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Feito com React.ts & Tailwindcss
      </p>
    </footer>
  );
}
