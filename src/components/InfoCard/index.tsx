// components/InfoCard.tsx

type InfoCardProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  description: string;
  footer?: React.ReactNode;
};

export function InfoCard({
  title,
  subtitle,
  meta,
  description,
  footer,
}: InfoCardProps) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-100 dark:bg-zinc-900  p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <h3 className="text-black dark:text-white text-lg md:text-xl font-semibold">
          {title}
        </h3>
        {meta && (
          <span className="shrink-0 text-zinc-600 dark:text-zinc-400 text-sm">
            {meta}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="text-zinc-700 dark:text-zinc-400 mt-1 md:text-lg">
          {subtitle}
        </p>
      )}

      <p className="text-zinc-900 dark:text-zinc-300 mt-4 text-sm md:text-base leading-relaxed">
        {description}
      </p>

      {footer && <div className="text-zinc-900 mt-4">{footer}</div>}
    </div>
  );
}
