import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { MediaDialog } from "./MediaPreview";

interface Props {
  media: string[];
}

const isVideo = (url: string) => /\.(mp4|mov|webm|ogg)$/i.test(url);

export function MediaCarousel({ media }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenDialog = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel className="w-full sm:max-w-[75vw]">
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
                    onClick={() => handleOpenDialog(index)}
                  />
                ) : (
                  <img
                    src={url}
                    alt={`Project image ${index + 1}`}
                    className="rounded-md object-cover w-full h-48 cursor-pointer"
                    onClick={() => handleOpenDialog(index)}
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <MediaDialog
        index={selectedIndex}
        selectIndex={setSelectedIndex}
        mediaFiles={media}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
}
