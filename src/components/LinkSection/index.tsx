import { Link } from "react-router";

type LinkSectionProps = {
  children: React.ReactNode;
  linkProps: React.ComponentProps<typeof Link>;
};

export function LinkSection({ children, linkProps }: LinkSectionProps) {
  return <Link {...linkProps}>{children}</Link>;
}
