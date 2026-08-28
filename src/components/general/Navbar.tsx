"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MobileNav } from "./MobileNav.tsx";
import { ThemeToggle } from "./ThemeToggle";
import { t } from "@/i18n";
import type { Locale } from "@/i18n";
import { useLocale } from "@/i18n/useLocale";

interface NavbarProps {
  lang: Locale;
}

export function Navbar({ lang: initialLang }: NavbarProps) {
  const lang = useLocale(initialLang);
  const linkClass =
    "hover:bg-background hover:border-b-secondary border-b-4 border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-4 sm:px-8 pt-4 pb-2 sm:text-lg";

  const items = [
    { href: `/${lang}`, label: t(lang, "nav.home") },
    { href: `/${lang}/development`, label: t(lang, "nav.development") },
    { href: `/${lang}/design`, label: t(lang, "nav.design") },
    { href: `/${lang}/contact`, label: t(lang, "nav.contact") },
  ];

  return (
    <>
      <NavigationMenu className="hidden md:flex text-primary">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.href} className="hover:text-primary">
              <NavigationMenuLink href={item.href} className={linkClass}>
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggle lang={lang} className="hidden md:inline-flex ml-2" />
      <MobileNav lang={lang} />
    </>
  );
}
