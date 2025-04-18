import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/ui/utils";
import { usePathname } from "next/navigation";

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={cn(
        "flex justify-between items-center p-4 text-terminal-white",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <motion.div
          className="flex flex-row gap-4 sm:gap-8 items-center"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold font-abel gradient-text">
            <Link href="/">ZEZE</Link>
          </h1>
          <h2
            className={cn(
              "sm:text-lg font-bold font-abel text-terminal-white/80",
              pathname === "/portfolio" && "text-terminal-white underline"
            )}
          >
            <Link href="/portfolio">PROFILE</Link>
          </h2>
          <h2
            className={cn(
              "sm:text-lg font-bold font-abel text-terminal-white/80",
              pathname === "/portfolio/work" && "text-terminal-white underline"
            )}
          >
            <Link href="/portfolio/work">WORK</Link>
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
