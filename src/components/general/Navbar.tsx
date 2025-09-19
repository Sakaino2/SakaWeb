import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <NavigationMenu className="text-primary sm:pr-8">
      <NavigationMenuList className="sm:gap-4">
        <NavigationMenuItem className="hover:text-primary">
          <NavigationMenuLink href="/" className="px-4 py-2 sm:text-lg">
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className=" hover:text-primary">
          <NavigationMenuLink
            href="/development"
            className="px-4 py-2 sm:text-lg"
          >
            Desarrollo
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className=" hover:text-primary">
          <NavigationMenuLink href="/design" className="px-4 py-2 sm:text-lg">
            Diseño
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className=" hover:text-primary">
          <NavigationMenuLink href="/contact" className="px-4 py-2 sm:text-lg">
            Contacto
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
