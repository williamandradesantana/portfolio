type LinkSectionProps = {
  children: React.ReactNode;
  linkProps: React.ComponentProps<"a">;
};

export function LinkSection({ children, linkProps }: LinkSectionProps) {
  return <a {...linkProps}>{children}</a>;
}
