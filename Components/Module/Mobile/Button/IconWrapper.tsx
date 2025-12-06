interface IconWrapperProps {
  children: React.ReactNode;
}

export default function IconWrapper({ children }: IconWrapperProps) {
  const isSocialIcon =
    typeof children === "object" &&
    children !== null &&
    "type" in children &&
    (children as any).type?.displayName === "SocialIcon";

  return (
    <span className="inline-flex items-center justify-center w-15 h-10 shrink-0">
      <span
        className={
          isSocialIcon
            ? "scale-[0.55] flex items-center justify-center"
            : "scale-[1.1] flex items-center justify-center"
        }
      >
        {children}
      </span>
    </span>
  );
}
