import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function FooterNavbar() {
  return (
    <NavigationMenu className="text-primary">
      <NavigationMenuList>
        <NavigationMenuItem className="hover:text-primary">
          <NavigationMenuLink
            href="/"
            className="hover:bg-background border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-4 sm:px-8 pt-4 pb-2 sm:text-lg"
          >
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className=" hover:text-primary">
          <NavigationMenuLink
            href="/development"
            className="hover:bg-background border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-4 sm:px-8 pt-4 pb-2 sm:text-lg"
          >
            Desarrollo
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className=" hover:text-primary">
          <NavigationMenuLink
            href="/design"
            className="hover:bg-background border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-4 sm:px-8 pt-4 pb-2 sm:text-lg"
          >
            Diseño
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className=" hover:text-primary">
          <NavigationMenuLink
            href="/contact"
            className="hover:bg-background border-b-background rounded-none focus:bg-background focus:border-b-secondary active:border-b-secondary px-4 sm:px-8 pt-4 pb-2 sm:text-lg"
          >
            Contacto
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
