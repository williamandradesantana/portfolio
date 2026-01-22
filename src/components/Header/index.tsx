import { useEffect, useState } from "react";
import { LinkSection } from "../LinkSection";
import clsx from "clsx";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";

type AvailableThemes = "dark" | "light";

export function Header() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    return (localStorage.getItem("theme") as AvailableThemes) || "dark";
  });

  const [isOpen, setIsOpen] = useState(false);

  const nextThemeIcon = {
    dark: <SunIcon size={20} />,
    light: <MoonIcon size={20} />,
  };

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const commonLinkClasses =
    "text-zinc-200 hover:text-zinc-500 transition-colors text-sm font-medium";

  return (
    <header className="top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Portfolio
        </h1>

        <nav className="hidden items-center gap-6 md:flex">
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Sobre
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Experiência
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Projetos
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Certificações
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Skills
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Contato
          </LinkSection>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            aria-label="Mudar tema"
            onClick={handleChangeTheme}
            className="rounded-md p-2 text-zinc-200 transition hover:bg-zinc-100 hover:text-zinc-900"
          >
            {nextThemeIcon[theme]}
          </a>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menu"
            className="rounded-md p-2 text-zinc-200 transition hover:bg-zinc-100 hover:text-zinc-900 md:hidden"
          >
            {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      <nav
        className={clsx(
          "md:hidden",
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-3 border-t border-zinc-200 px-4 py-4">
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Sobre
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Experiência
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Projetos
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Certificações
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Skills
          </LinkSection>
          <LinkSection linkProps={{ to: "#", className: commonLinkClasses }}>
            Contato
          </LinkSection>
        </div>
      </nav>
    </header>
  );
}
