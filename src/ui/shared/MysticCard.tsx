import React from "react";
import { cn } from "../utils/cn";

interface MysticCardProps {
  children: React.ReactNode;
  className?: string;
}

export const MysticCard: React.FC<MysticCardProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-dark-purple-800 rounded-[16px] sm:rounded-[32px] p-4 sm:p-6 animate-fade-in-scale drop-shadow-lg",
        className
      )}
    >
      <div className="border-gold-400 rounded-[8px] sm:rounded-[16px] border-2 p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
};
