import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Dialog, DialogContent } from "../ui/dialog";

interface Props {
  media: string[];
}

const isVideo = (url: string) => /\.(mp4|mov|webm|ogg)$/i.test(url);

export function MediaCarousel({ media }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState("");

  const handleMediaClick = (url: string) => {
    setSelectedMedia(url);
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center">
      <Carousel className="w-full max-w-4xl">
        <CarouselContent className="-ml-1">
          {media.map((url, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                {isVideo(url) ? (
                  <video
                    src={url}
                    controls
                    className="rounded-md object-cover w-full h-48 cursor-pointer"
                    onClick={() => handleMediaClick(url)}
                  />
                ) : (
                  <img
                    src={url}
                    alt={`Project image ${index + 1}`}
                    className="rounded-md object-cover w-full h-48 cursor-pointer"
                    onClick={() => handleMediaClick(url)}
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0">
          {isVideo(selectedMedia) ? (
            <video
              src={selectedMedia}
              controls
              autoPlay
              className="w-full h-auto object-contain"
            />
          ) : (
            <img
              src={selectedMedia}
              alt="Full screen preview"
              className="w-full h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
