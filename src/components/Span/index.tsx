import clsx from "clsx";

type SpanProps = {
  children: React.ReactNode;
};

export function Span({ children }: SpanProps) {
  return (
    <span
      className={clsx(
        "rounded-md border px-3 py-1 text-sm md:text-base",
        "border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900",
        "dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-white",
        "transition",
      )}
    >
      {children}
    </span>
  );
}
