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
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAseprite,
  SiAstro,
  SiAutodeskmaya,
  SiDocker,
  SiFlutter,
  SiGo,
  SiNodedotjs,
  SiReact,
  SiShopify,
  SiTailwindcss,
} from "react-icons/si";
import AutoScroll from "embla-carousel-auto-scroll";

export function SkillsCarousel() {
  return (
    <Tabs defaultValue="dev" className="w-full">
      <TabsContent value="dev">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl dark:text-gray-100">
            Lenguajes / Herramientas
          </h2>
          <TabsList>
            <TabsTrigger value="dev">Desarrollo</TabsTrigger>
            <TabsTrigger value="design">Diseño</TabsTrigger>
          </TabsList>
        </div>
        <div className="flex justify-center items-center">
          <Carousel
            className="w-full sm:max-w-[75vw] mt-4 items-center justify-center"
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </TabsContent>
      <TabsContent value="design">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl dark:text-gray-100">
            Programas / Herramientas
          </h2>
          <TabsList>
            <TabsTrigger value="dev">Desarrollo</TabsTrigger>
            <TabsTrigger value="design">Diseño</TabsTrigger>
          </TabsList>
        </div>
        <div className="flex justify-center items-center">
          <Carousel
            className="w-full sm:max-w-[75vw] mt-4 items-center justify-center"
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </TabsContent>
    </Tabs>
  );
}

const DesignSkills: SkillCarouselItemProps[] = [
  { children: <SiAdobeaftereffects size={80} />, title: "Adobe After Effect" },
  { children: <SiAdobeillustrator size={80} />, title: "Adobe Illustrator" },
  { children: <SiAdobephotoshop size={80} />, title: "Adobe Photoshop" },
  { children: <SiAdobepremierepro size={80} />, title: "Adobe Premiere" },
  { children: <SiAdobeindesign size={80} />, title: "Adobe InDesign" },
  { children: <SiAseprite size={80} />, title: "Aseprite" },
  { children: <SiAutodeskmaya size={80} />, title: "Maya" },
];

const DevSkills: SkillCarouselItemProps[] = [
  { children: <SiGo size={80} />, title: "Golang" },
  { children: <SiFlutter size={80} />, title: "Flutter" },
  { children: <SiAstro size={80} />, title: "Astro" },
  { children: <SiReact size={80} />, title: "React" },
  { children: <SiTailwindcss size={80} />, title: "Tailwind" },
  { children: <SiDocker size={80} />, title: "Docker" },
  { children: <SiNodedotjs size={80} />, title: "NodeJS" },
  { children: <SiShopify size={80} />, title: "Shopify" },
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
        <p className="text-md ">{props.title}</p>
      </div>
    </CarouselItem>
  );
}
