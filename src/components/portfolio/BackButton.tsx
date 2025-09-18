"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const handleGoBack = () => {
    history.back();
  };

  return (
    <Button onClick={handleGoBack} variant="outline" className="gap-2">
      <ArrowLeft className="w-4 h-4" />
      Back
    </Button>
  );
}
