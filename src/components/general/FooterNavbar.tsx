import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { t } from "@/i18n";
import type { Locale } from "@/i18n";
import { useLocale } from "@/i18n/useLocale";

interface FooterNavbarProps {
  lang: Locale;
}

export function FooterNavbar({ lang: initialLang }: FooterNavbarProps) {
  const lang = useLocale(initialLang);
  const items = [
    { href: `/${lang}`, label: t(lang, "nav.home") },
    { href: `/${lang}/development`, label: t(lang, "nav.development") },
    { href: `/${lang}/design`, label: t(lang, "nav.design") },
    { href: `/${lang}/contact`, label: t(lang, "nav.contact") },
  ];

  return (
    <NavigationMenu className="text-foreground">
      <NavigationMenuList className="gap-0 lg:gap-1">
        {items.map((item) => (
          <NavigationMenuItem key={item.href} className="hover:text-primary">
            <NavigationMenuLink
              href={item.href}
              className="hover:bg-background border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-3 md:px-6 lg:px-8 pt-4 pb-2 sm:text-lg"
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
