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
      <Link href="/">
        <Image
          src="/Ola-Primary.png"
          alt="Ola Padel logo"
          width={170}
          height={170}
          priority
          className="object-contain my-2 cursor-pointer"
        />
      </Link>

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
            <Link 
              href="https://courtside.id/mitra?mitra_id=a0728379-8662-4c9b-8cde-61fcceb8d247">
            <OlaButton
              className="text-xl"
              variant="secondary"
              icon={<ArrowUpRight size={24} />}
            >
              Book Court
            </OlaButton>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
