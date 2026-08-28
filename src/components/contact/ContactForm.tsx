"use client";

import { useState, type FormEvent } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { t } from "@/i18n";
import type { Locale } from "@/i18n";
import { useLocale } from "@/i18n/useLocale";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgvdvoa";

type Status = "idle" | "loading" | "success" | "error";

interface ContactFormProps {
  lang: Locale;
}

export function ContactForm({ lang: initialLang }: ContactFormProps) {
  const lang = useLocale(initialLang);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="border border-green-500/40 bg-green-500/10 text-green-700 dark:text-green-300 rounded-md p-4"
        role="status"
      >
        <p className="font-semibold">{t(lang, "form.successTitle")}</p>
        <p className="text-sm mt-1">{t(lang, "form.successBody")}</p>
        <Button
          variant="link"
          className="mt-2 px-0"
          onClick={() => setStatus("idle")}
        >
          {t(lang, "form.sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div
          className="border border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300 rounded-md p-4"
          role="alert"
        >
          <p className="text-sm">{t(lang, "form.error")}</p>
        </div>
      )}
      <div>
        <Label htmlFor="name" className="mb-4">
          {t(lang, "form.name")}
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder={t(lang, "form.namePlaceholder")}
          required
        />
      </div>
      <div>
        <Label htmlFor="email" className="mb-4">
          {t(lang, "form.email")}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t(lang, "form.emailPlaceholder")}
          required
        />
      </div>
      <div>
        <Label htmlFor="message" className="mb-4">
          {t(lang, "form.message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t(lang, "form.messagePlaceholder")}
          required
        />
      </div>
      <Button
        className="mt-4"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? t(lang, "form.submitting") : t(lang, "form.submit")}
      </Button>
    </form>
  );
}
