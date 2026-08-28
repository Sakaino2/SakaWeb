import { useEffect, useState } from "react";
import { isLocale, normalizeLocale, type Locale } from "./index";

export function getDomLocale(): Locale {
  if (typeof document !== "undefined" && document.documentElement) {
    const lang = document.documentElement.getAttribute("lang");
    if (lang && isLocale(lang)) return lang;
  }
  return normalizeLocale(undefined);
}

export function useLocale(initial?: Locale): Locale {
  const [locale, setLocale] = useState<Locale>(initial ?? getDomLocale());

  useEffect(() => {
    function sync() {
      setLocale(getDomLocale());
    }
    sync();
    document.addEventListener("astro:after-swap", sync);
    return () => document.removeEventListener("astro:after-swap", sync);
  }, []);

  return locale;
}
