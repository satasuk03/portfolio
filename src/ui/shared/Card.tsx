import React from "react";
import { cn } from "@/ui/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-terminal-black-800 border border-terminal-white/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
