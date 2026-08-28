import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { t } from "@/i18n";
import type { Locale } from "@/i18n";
import { useLocale } from "@/i18n/useLocale";

interface MobileNavProps {
  lang: Locale;
}

export function MobileNav({ lang: initialLang }: MobileNavProps) {
  const lang = useLocale(initialLang);
  const [open, setOpen] = useState(false);

  const items = [
    { href: `/${lang}`, label: t(lang, "nav.home") },
    { href: `/${lang}/development`, label: t(lang, "nav.development") },
    { href: `/${lang}/design`, label: t(lang, "nav.design") },
    { href: `/${lang}/contact`, label: t(lang, "nav.contact") },
  ];

  return (
    <div className="flex items-center gap-2">
      <ThemeToggle lang={lang} className="md:hidden" />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">{t(lang, "mobileNav.toggle")}</span>
          </Button>
        </SheetTrigger>
      <SheetContent className="w-full md:hidden">
        <SheetHeader></SheetHeader>
        <NavigationMenu
          orientation="vertical"
          className="text-primary mx-auto sm:ml-20 items-start"
        >
          <NavigationMenuList className="bg-background flex flex-col gap-4 sm:items-start w-full">
            {items.map((item) => (
              <NavigationMenuItem
                key={item.href}
                className="hover:text-primary"
              >
                <NavigationMenuLink
                  href={item.href}
                  className="bg-background text-2xl hover:bg-background focus:bg-background"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
    </div>
  );
}
