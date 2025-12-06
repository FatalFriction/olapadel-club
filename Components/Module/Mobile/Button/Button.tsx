"use client";

import Link from "next/link";
import { ReactNode } from "react";
import IconWrapper from "./IconWrapper";

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
    "w-[68%] flex items-center justify-center py-3 px-4 pl-2 rounded-4xl " +
    "bg-[#F2F5E6]/80 backdrop-blur-sm border border-[#F2F5E6]/10 " +
    "active:scale-[0.98] transition text-[#073730] font-medium text-xl leading-none";

  const iconWrapper = icon ? <IconWrapper>{icon}</IconWrapper> : null;

  const content = (
    <div className="flex items-center gap-4 justify-center">
      {iconWrapper}
      <span className="leading-none">{children}</span>
    </div>
  );

  if (href)
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {content}
      </Link>
    );

  return (
    <button type="button" onClick={onClick} className={`${baseStyles} ${className}`}>
      {content}
    </button>
  );
}
