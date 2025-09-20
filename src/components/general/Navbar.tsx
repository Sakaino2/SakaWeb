"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MobileNav } from "./MobileNav.tsx";

export function Navbar() {
  return (
    <>
      <NavigationMenu className="hidden md:flex text-primary">
        <NavigationMenuList>
          <NavigationMenuItem className="hover:text-primary">
            <NavigationMenuLink
              href="/"
              className="hover:bg-background hover:border-b-secondary border-b-4 border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-4 sm:px-8 pt-4 pb-2 sm:text-lg"
            >
              Inicio
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" hover:text-primary">
            <NavigationMenuLink
              href="/development"
              className="hover:bg-background hover:border-b-secondary border-b-4 border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-4 sm:px-8 pt-4 pb-2 sm:text-lg"
            >
              Desarrollo
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" hover:text-primary">
            <NavigationMenuLink
              href="/design"
              className="hover:bg-background hover:border-b-secondary border-b-4 border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-4 sm:px-8 pt-4 pb-2 sm:text-lg"
            >
              Diseño
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" hover:text-primary">
            <NavigationMenuLink
              href="/contact"
              className="hover:bg-background hover:border-b-secondary border-b-4 border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-4 sm:px-8 pt-4 pb-2 sm:text-lg"
            >
              Contacto
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <MobileNav />
    </>
  );
}
