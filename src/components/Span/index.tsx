import clsx from "clsx";

type SpanProps = {
  children: React.ReactNode;
};

export function Span({ children }: SpanProps) {
  return (
    <span
      className={clsx(
        "rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-700",
        "transition hover:border-zinc-500 hover:text-white dark:text-zinc-400 dark:hover:text-zinc-300",
      )}
    >
      {children}
    </span>
  );
}
