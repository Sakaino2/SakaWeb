import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:hidden">
        <SheetHeader></SheetHeader>
        <NavigationMenu
          orientation="vertical"
          className="text-primary mx-auto sm:ml-20 items-start"
        >
          <NavigationMenuList className="bg-background flex flex-col gap-4 sm:items-start w-full">
            <NavigationMenuItem className="hover:text-primary">
              <NavigationMenuLink
                href="/"
                className="bg-background text-2xl hover:bg-background focus:bg-background"
                onClick={() => setOpen(false)}
              >
                Inicio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className=" hover:text-primary">
              <NavigationMenuLink
                href="/development"
                className="bg-background text-2xl hover:bg-background focus:bg-background"
                onClick={() => setOpen(false)}
              >
                Desarrollo
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className=" hover:text-primary">
              <NavigationMenuLink
                href="/design"
                className="bg-background text-2xl hover:bg-background focus:bg-background"
                onClick={() => setOpen(false)}
              >
                Diseño
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className=" hover:text-primary">
              <NavigationMenuLink
                href="/contact"
                className="bg-background text-2xl hover:bg-background focus:bg-background"
                onClick={() => setOpen(false)}
              >
                Contacto
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}
