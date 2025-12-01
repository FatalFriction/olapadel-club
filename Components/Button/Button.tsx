"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

interface OlaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "outline-secondary"
    | "ghost"
    | "number"
    | "number-outline";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  rounded?: "none" | "md" | "full";
  size?: number;
}

const OlaButton = forwardRef<HTMLButtonElement, OlaButtonProps>(
  (
    {
      asChild = false,
      className,
      variant = "primary",
      icon,
      iconPosition = "left",
      rounded = "full",
      size = 64,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isNumber = variant === "number" || variant === "number-outline";

    return (
      <Comp
        ref={ref}
        {...props}
        style={isNumber ? { width: `${size}px`, height: `${size}px` } : undefined}
        className={cn(
          !isNumber && "w-full h-full px-4 py-1",
          isNumber && "shrink-0",
          "flex items-center justify-center gap-3",
          "font-faculty tracking-widest",
          isNumber ? "text-lg font-semibold" : "text-sm",
          "transition-all duration-300 ease-out cursor-pointer",

          !isNumber &&
            (rounded === "none"
              ? "rounded-none"
              : rounded === "md"
              ? "rounded-md"
              : "rounded-full"),

          isNumber && "rounded-full",

          variant === "primary" &&
            "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",

          variant === "secondary" &&
            "bg-secondary text-primary hover:bg-primary hover:text-accent",

          variant === "outline" &&
            "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",

          variant === "outline-secondary" &&
            "border border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-transparent",

          variant === "ghost" &&
            "bg-transparent text-foreground hover:bg-muted",

          variant === "number" &&
            "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground p-0",

          variant === "number-outline" &&
            "bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground p-0",

          className
        )}
      >
        {!isNumber && icon && iconPosition === "left" && (
          <span className="flex items-center">{icon}</span>
        )}

        <span className={isNumber ? "leading-none" : ""}>{children}</span>

        {!isNumber && icon && iconPosition === "right" && (
          <span className="flex items-center">{icon}</span>
        )}
      </Comp>
    );
  }
);

OlaButton.displayName = "OlaButton";

export default OlaButton;
