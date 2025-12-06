"use client"

import { useState } from "react"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/Components/ui/navigation-menu"
import Link from "next/link"
import OlaButton from "../Button/Button"
import { ArrowUpRight, Menu, X } from "lucide-react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="absolute top-0 left-0 flex items-center justify-between p-4 bg-background w-full z-50">

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

      <div className="hidden lg:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-24 mr-8">

            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="text-primary text-xl tracking-widest hover:text-primary transition"
              >
                About
              </Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <Link
                href="https://wa.me/6282225638033"
                className="text-primary text-xl tracking-widest hover:text-primary transition"
              >
                Services
              </Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <Link
                href="https://wa.me/6282225638033"
                className="text-primary text-xl tracking-widest hover:text-primary transition"
              >
                Pricing
              </Link>
            </NavigationMenuLink>

            <NavigationMenuItem>
              <Link href="https://courtside.id/mitra?mitra_id=a0728379-8662-4c9b-8cde-61fcceb8d247">
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

      <button
        className="lg:hidden text-primary"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={34} /> : <Menu size={34} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-background flex flex-col gap-6 p-6 shadow-lg lg:hidden">

          <Link
            href="/"
            className="text-primary text-xl tracking-widest"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="https://wa.me/6282225638033"
            className="text-primary text-xl tracking-widest"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>

          <Link
            href="https://wa.me/6282225638033"
            className="text-primary text-xl tracking-widest"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>

          <Link 
            href="https://courtside.id/mitra?mitra_id=a0728379-8662-4c9b-8cde-61fcceb8d247"
            onClick={() => setOpen(false)}
            className="text-primary text-xl tracking-widest"
          >
              Book Court
          </Link>

        </div>
      )}
    </div>
  )
}

export default Navbar
