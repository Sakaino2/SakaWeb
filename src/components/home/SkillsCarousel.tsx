import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ReactNode } from "react";
import {
  SiAseprite,
  SiAstro,
  SiAutodeskmaya,
  SiDocker,
  SiFlutter,
  SiGithub,
  SiGo,
  SiNodedotjs,
  SiReact,
  SiShopify,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandAdobeAfterEffect,
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
  TbBrandAdobePhotoshop,
  TbBrandAdobePremier,
} from "react-icons/tb";
import AutoScroll from "embla-carousel-auto-scroll";

export function SkillsCarousel() {
  return (
    <Tabs defaultValue="dev" className="w-full">
      <TabsContent value="dev">
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl dark:text-gray-100">
            Lenguajes / Herramientas
          </h2>
          <div className="flex mt-3 lg:mt-2 ml-auto lg:ml-0 items-end">
            <TabsList>
              <TabsTrigger value="dev">Desarrollo</TabsTrigger>
              <TabsTrigger value="design">Diseño</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className="flex mt-4 justify-center items-center">
          <Carousel
            className="w-full sm:max-w-[75vw] items-center justify-center"
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                active: true,
                speed: 1,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              {DevSkills.map((skill, i) => (
                <SkillCarouselItem
                  key={i + "-" + skill.title}
                  title={skill.title}
                >
                  {skill.children}
                </SkillCarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </TabsContent>
      <TabsContent value="design">
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl dark:text-gray-100">
            Programas / Herramientas
          </h2>
          <div className="flex mt-3 lg:mt-2 ml-auto lg:ml-0 items-end">
            <TabsList>
              <TabsTrigger value="dev">Desarrollo</TabsTrigger>
              <TabsTrigger value="design">Diseño</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className="flex mt-4 justify-center items-center">
          <Carousel
            className="w-full sm:max-w-[75vw] items-center justify-center"
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                active: true,
                speed: 1,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              {DesignSkills.map((skill, i) => (
                <SkillCarouselItem
                  key={i + "-" + skill.title}
                  title={skill.title}
                >
                  {skill.children}
                </SkillCarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </TabsContent>
    </Tabs>
  );
}

const IconSizeStyle = "w-12 h-12 md:w-18 md:h-18 lg:w-22 lg:h-22";

const DesignSkills: SkillCarouselItemProps[] = [
  {
    children: <TbBrandAdobeAfterEffect className={IconSizeStyle} />,
    title: "Adobe After Effect",
  },
  {
    children: <TbBrandAdobeIllustrator className={IconSizeStyle} />,
    title: "Adobe Illustrator",
  },
  {
    children: <TbBrandAdobePhotoshop className={IconSizeStyle} />,
    title: "Adobe Photoshop",
  },
  {
    children: <TbBrandAdobePremier className={IconSizeStyle} />,
    title: "Adobe Premiere",
  },
  {
    children: <TbBrandAdobeIndesign className={IconSizeStyle} />,
    title: "Adobe InDesign",
  },
  { children: <SiAseprite className={IconSizeStyle} />, title: "Aseprite" },
  { children: <SiAutodeskmaya className={IconSizeStyle} />, title: "Maya" },
];

const DevSkills: SkillCarouselItemProps[] = [
  {
    children: <SiGo className={IconSizeStyle} />,
    title: "Golang",
  },
  { children: <SiFlutter className={IconSizeStyle} />, title: "Flutter" },
  { children: <SiAstro className={IconSizeStyle} />, title: "Astro" },
  { children: <SiReact className={IconSizeStyle} />, title: "React" },
  { children: <SiTailwindcss className={IconSizeStyle} />, title: "Tailwind" },
  { children: <SiGithub className={IconSizeStyle} />, title: "Github" },
  { children: <SiDocker className={IconSizeStyle} />, title: "Docker" },
  { children: <SiNodedotjs className={IconSizeStyle} />, title: "NodeJS" },
  { children: <SiShopify className={IconSizeStyle} />, title: "Shopify" },
];

interface SkillCarouselItemProps {
  children: ReactNode;
  title: string;
}

function SkillCarouselItem(props: SkillCarouselItemProps) {
  return (
    <CarouselItem className="pl-1 basis-1/4">
      <div className="p-1 flex flex-col gap-4 aspect-square items-center justify-center">
        {props.children}
        <p className="text-md text-sm text-center">{props.title}</p>
      </div>
    </CarouselItem>
  );
}
