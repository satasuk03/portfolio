import React from "react";
import { cn } from "../utils/cn";

interface MysticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "sm" | "md" | "lg";
  //   variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const MysticButton: React.FC<MysticButtonProps> = ({
  className,
  //   variant = "primary",
  size = "md",
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "bg-dark-purple-600 border text-sm border-gold-300 hover:bg-dark-purple-400 rounded-[16px] p-2 drop-shadow-lg font-yusei-magic text-gold-300",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
