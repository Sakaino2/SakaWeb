"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n";
import type { Locale } from "@/i18n";
import { useLocale } from "@/i18n/useLocale";

interface ThemeToggleProps {
  className?: string;
  lang: Locale;
}

function isDark() {
  return typeof document !== "undefined"
    ? document.documentElement.classList.contains("dark")
    : false;
}

export function ThemeToggle({ className, lang: initialLang }: ThemeToggleProps) {
  const lang = useLocale(initialLang);
  const [dark, setDark] = useState(isDark);

  useEffect(() => {
    function sync() {
      setDark(isDark());
    }
    sync();
    document.addEventListener("astro:after-swap", sync);
    return () => document.removeEventListener("astro:after-swap", sync);
  }, []);

  function toggleTheme() {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      /* ignore */
    }
    setDark(next);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={className}
      aria-label={dark ? t(lang, "theme.toLight") : t(lang, "theme.toDark")}
    >
      <Sun
        className={`h-6 w-6 transition-all ${
          dark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90 scale-0"
        }`}
      />
      <Moon
        className={`absolute h-6 w-6 transition-all ${
          dark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0"
        }`}
      />
      <span className="sr-only">{t(lang, "theme.sr")}</span>
    </Button>
  );
}
