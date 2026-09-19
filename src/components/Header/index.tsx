import { useEffect, useState } from "react";
import { LinkSection } from "../LinkSection";
import clsx from "clsx";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";

type AvailableThemes = "dark" | "light";

const NAV_LINKS = [
  { href: "#about", label: "Sobre" },
  { href: "#experiences", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
  { href: "#certifications", label: "Certificações" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contato" },
];

export function Header() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const [isOpen, setIsOpen] = useState(false);

  const nextThemeIcon = {
    dark: <SunIcon size={20} />,
    light: <MoonIcon size={20} />,
  };

  function handleChangeTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleCloseMenu() {
    setIsOpen(false);
  }

  const commonLinkClasses =
    "text-zinc-600 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium";

  const iconButtonClasses =
    "rounded-md p-2 text-zinc-600 dark:text-zinc-200 transition hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer";

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
          William Santana
        </LinkSection>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-4 md:flex lg:gap-6"
        >
          {NAV_LINKS.map((link) => (
            <LinkSection
              key={link.href}
              linkProps={{
                href: link.href,
                className: clsx(commonLinkClasses, "text-sm lg:text-base"),
                "aria-label": `Ir para ${link.label}`,
                title: `Ir para ${link.label}`,
              }}
            >
              {link.label}
            </LinkSection>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={
              theme === "dark"
                ? "Mudar para tema claro"
                : "Mudar para tema escuro"
            }
            onClick={handleChangeTheme}
            className={iconButtonClasses}
          >
            {nextThemeIcon[theme]}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className={clsx(iconButtonClasses, "md:hidden")}
          >
            {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegação principal (mobile)"
        className={clsx(
          "md:hidden",
          "overflow-hidden transition-all duration-300 motion-reduce:transition-none",
          isOpen ? "max-h-96 opacity-100" : "invisible max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-3 border-t border-zinc-200 px-4 py-4 dark:border-zinc-800">
          {NAV_LINKS.map((link) => (
            <LinkSection
              key={link.href}
              linkProps={{
                href: link.href,
                className: clsx(commonLinkClasses, "text-base py-1"),
                onClick: handleCloseMenu,
                "aria-label": `Ir para ${link.label}`,
                title: `Ir para ${link.label}`,
              }}
            >
              {link.label}
            </LinkSection>
          ))}
        </div>
      </nav>
    </header>
  );
}
