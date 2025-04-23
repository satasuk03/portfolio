import * as React from "react";
import { cn } from "../utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        // Translate when hover scale 1.5
        "hover:scale-110 hover:translate-y-[-5px] delay-50 transition-all duration-300 ease-in-out",
        "font-abel inline-flex items-center rounded-md px-2.5 py-0.5 text-xs focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "bg-redish-pink/60 text-terminal-white",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "destructive" &&
          "bg-destructive text-destructive-foreground",
        variant === "outline" && "text-foreground",
        className
      )}
      {...props}
    />
  );
}

export default Badge;
