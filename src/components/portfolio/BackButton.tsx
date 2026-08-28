"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { t } from "@/i18n";
import type { Locale } from "@/i18n";
import { useLocale } from "@/i18n/useLocale";

interface BackButtonProps {
  fallbackHref?: string;
  lang: Locale;
}

export function BackButton({ fallbackHref = "/", lang: initialLang }: BackButtonProps) {
  const lang = useLocale(initialLang);
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = fallbackHref;
    }
  };

  return (
    <Button
      onClick={handleGoBack}
      variant="outline"
      className="gap-2 cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      {t(lang, "backButton")}
    </Button>
  );
}
