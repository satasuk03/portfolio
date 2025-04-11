import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/ui/utils";

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  return (
    <div
      className={cn(
        "flex justify-between items-center p-4 text-terminal-white",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold font-abel">
            <Link href="/">ZEZE PORTFOLIO</Link>
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
