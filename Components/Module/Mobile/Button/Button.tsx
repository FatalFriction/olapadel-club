"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface MobileButtonProps {
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function MobileButton({
  href,
  onClick,
  icon,
  children,
  className = "",
}: MobileButtonProps) {
  const baseStyles =
    "w-[68%] flex items-center justify-center py-2 px-2 rounded-4xl " +
    "bg-[#F2F5E6]/80 backdrop-blur-sm border border-[#F2F5E6]/10 active:scale-[0.98] transition " +
    "text-[#073730] font-medium text-xl";

  const iconWrapper = icon ? (
    <span className="flex items-center justify-center w-15 h-12 aspect-square shrink-0 overflow-hidden">
      <span className="w-20 h-8 flex items-center justify-center">{icon}</span>
    </span>
  ) : null;

  const content = (
    <div className="flex items-center gap-5 justify-center mx-auto">
      {iconWrapper}
      <span className="whitespace-nowrap">
        {children}
      </span>
    </div>
  );

  if (href)
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {content}
      </Link>
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {content}
    </button>
  );
}
