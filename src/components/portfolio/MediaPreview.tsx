import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MediaDialogProps {
  mediaFiles: string[];
  index: number;
  selectIndex: (index: number) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const isVideo = (url: string) => /\.(mp4|mov|webm|ogg)$/i.test(url);

export function MediaDialog({
  mediaFiles,
  index,
  selectIndex,
  open,
  onOpenChange,
}: MediaDialogProps) {
  const handleNext = () => {
    let nextIndex: number;
    if (index + 1 >= mediaFiles.length) {
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }

    selectIndex(nextIndex);
  };

  const handlePrevious = () => {
    let previousIndex: number;
    if (index - 1 < 0) {
      previousIndex = mediaFiles.length - 1;
    } else {
      previousIndex = index - 1;
    }

    selectIndex(previousIndex);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none bg-transparent max-w-full sm:max-w-[70vw]">
        <div className="relative">
          {isVideo(mediaFiles[index]) ? (
            <video
              src={mediaFiles[index]}
              controls
              autoPlay
              className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
            />
          ) : (
            <img
              src={mediaFiles[index]}
              alt={`Media ${index + 1}`}
              className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
            />
          )}

          <Button
            onClick={handlePrevious}
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          >
            <ChevronLeft />
          </Button>

          <Button
            onClick={handleNext}
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <ChevronRight />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
