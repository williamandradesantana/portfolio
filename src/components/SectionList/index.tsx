import { clsx } from "clsx";

type SectionListProps = {
  children: React.ReactNode;
};

export function SectionList({ children }: SectionListProps) {
  return (
    <div className={clsx("mt-8 flex flex-col gap-6", "w-full md:max-w-6xl")}>
      {children}
    </div>
  );
}
