import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/Components/ui/navigation-menu";
import Link from "next/link";
import OlaButton from "../Button/Button";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="absolute top-0 flex items-center justify-between p-4 bg-background w-full z-50">
      <Image
        src="/Ola-Primary.png"
        alt="Ola Padel logo"
        width={170}
        height={170}
        priority
        className="object-contain my-2"
      />

      <NavigationMenu>
        <NavigationMenuList className="flex gap-24 mr-8">
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className="text-primary text-xl tracking-widest hover:text-primary transition"
            >
              About
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link
              href="/services"
              className="text-primary text-xl tracking-widest hover:text-primary transition"
            >
              Services
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link
              href="/pricing"
              className="text-primary text-xl tracking-widest hover:text-primary transition"
            >
              Pricing
            </Link>
          </NavigationMenuLink>

          <NavigationMenuItem>
            <OlaButton className="text-xl" variant="secondary" icon={<ArrowUpRight size={24} />}>Join Now</OlaButton>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
