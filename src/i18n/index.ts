export const locales = [
  { code: "es", label: "Español", ogLocale: "es_PE" },
  { code: "en", label: "English", ogLocale: "en_US" },
] as const;

export type Locale = (typeof locales)[number]["code"];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale.code === value);
}

export function normalizeLocale(value?: string): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function ogLocaleFor(locale: Locale): string {
  return locales.find((l) => l.code === locale)!.ogLocale;
}

export { ui, t, type UIKey } from "./ui";
