import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isVideo = (url: string) => /\.(mp4|mov|webm|ogg)$/i.test(url);

export const isYouTube = (url: string) => /youtube\.com|youtu\.be/i.test(url);

export const getEmbedUrl = (url: string) => {
  if (isYouTube(url)) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : url;
  }
  return url;
};

const getYouTubeId = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const getVideoThumbnail = (url: string) => {
  if (isYouTube(url)) {
    const id = getYouTubeId(url);
    // hqdefault.jpg gives a reliable 480x360 preview
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
  }
  return "";
};
