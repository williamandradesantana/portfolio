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
    setTheme((prevState) => {
      const nextTheme = prevState === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleCloseMenu() {
    setIsOpen(false);
  }

  const commonLinkClasses =
    "text-zinc-600 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-500 transition-colors text-sm font-medium";

  return (
    <header className="top-0 fixed z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <LinkSection
          linkProps={{
            href: "/",
            className: "text-lg font-semibold text-zinc-900 dark:text-zinc-100",
            "aria-label": "Ir para página inicial",
            title: "Ir para página inicial",
          }}
        >
          Portfolio
        </LinkSection>

        <nav className="hidden items-center gap-6 md:flex">
          <LinkSection
            linkProps={{
              href: "#about",
              className: commonLinkClasses,
              "aria-label": "Ir para sobre",
              title: "Ir para sobre",
            }}
          >
            Sobre
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#experiences",
              className: commonLinkClasses,
              "aria-label": "Ir para experiência",
              title: "Ir para experiência",
            }}
          >
            Experiência
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#projects",
              className: commonLinkClasses,
              "aria-label": "Ir para projetos",
              title: "Ir para projetos",
            }}
          >
            Projetos
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#certifications",
              className: commonLinkClasses,
              "aria-label": "Ir para certificações",
              title: "Ir para certificações",
            }}
          >
            Certificações
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#skills",
              className: commonLinkClasses,
              "aria-label": "Ir para skills",
              title: "Ir para skills",
            }}
          >
            Skills
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#contact",
              className: commonLinkClasses,
              "aria-label": "Ir para contato",
              title: "Ir para contato",
            }}
          >
            Contato
          </LinkSection>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            aria-label="Mudar tema"
            onClick={handleChangeTheme}
            className="rounded-md p-2 text-zinc-600 dark:text-zinc-200 transition hover:bg-zinc-100 hover:text-zinc-900"
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
          isOpen ? "opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-3 border-t border-zinc-200 px-4 py-4">
          <LinkSection
            linkProps={{
              href: "#about",
              className: commonLinkClasses,
              onClick: handleCloseMenu,
              "aria-label": "Ir para sobre",
              title: "Ir para sobre",
            }}
          >
            Sobre
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#experiences",
              className: commonLinkClasses,
              onClick: handleCloseMenu,
              "aria-label": "Ir para experiência",
              title: "Ir para experiência",
            }}
          >
            Experiência
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#projects",
              className: commonLinkClasses,
              onClick: handleCloseMenu,
              "aria-label": "Ir para projetos",
              title: "Ir para projetos",
            }}
          >
            Projetos
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#certifications",
              className: commonLinkClasses,
              onClick: handleCloseMenu,
              "aria-label": "Ir para certificações",
              title: "Ir para certificações",
            }}
          >
            Certificações
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#skills",
              className: commonLinkClasses,
              onClick: handleCloseMenu,
              "aria-label": "Ir para skills",
              title: "Ir para skills",
            }}
          >
            Skills
          </LinkSection>
          <LinkSection
            linkProps={{
              href: "#contact",
              className: commonLinkClasses,
              onClick: handleCloseMenu,
              "aria-label": "Ir para contato",
              title: "Ir para contato",
            }}
          >
            Contato
          </LinkSection>
        </div>
      </nav>
    </header>
  );
}
