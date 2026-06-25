import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { MediaDialog } from "./MediaPreview";
import { getVideoThumbnail, isYouTube } from "@/lib/utils";

interface Props {
  media: string[];
}

export function MediaCarousel({ media }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenDialog = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <Carousel className="w-full sm:max-w-[75vw]">
        <CarouselContent className="-ml-1">
          {media.map((url, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 relative group">
                {isYouTube(url) && (
                  <div
                    className="relative rounded-md overflow-hidden w-full h-auto aspect-video cursor-pointer bg-slate-900 group shadow-sm"
                    onClick={() => handleOpenDialog(index)}
                  >
                    {getVideoThumbnail(url) ? (
                      <img
                        src={getVideoThumbnail(url)}
                        alt="Video Preview"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-linear-to-tr from-slate-800 to-slate-900 flex items-center justify-center" />
                    )}

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:scale-110">
                        <span className="ml-1 text-xl">▶</span>
                      </div>
                    </div>
                  </div>
                )}

                {!isYouTube(url) && (
                  <img
                    src={url}
                    alt={`Project image ${index + 1}`}
                    className="rounded-md object-cover w-full h-44 cursor-pointer"
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
