"use client";

import Image from "next/image";
import { useBackground } from "@/Components/Module/Mobile/Background/BackgroundContext";

export function MobileLogo() {
  const { logo } = useBackground();

  if (!logo) return null;

  return (
    <div className="flex justify-center">
      <Image
        src={logo}
        width={125}
        height={125}
        alt="Ola Padel Club Logo"
        className="object-contain"
        priority
      />
    </div>
  );
}
