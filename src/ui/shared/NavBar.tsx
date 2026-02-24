"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/ui/utils";
import { usePathname } from "next/navigation";

interface NavBarProps {
  className?: string;
}

function NavLink({
  href,
  children,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
}) {
  const isActive = pathname === href;
  return (
    <Link href={href} className="relative pb-[2px]">
      <span
        className={cn(
          "sm:text-lg font-bold font-abel transition-colors duration-200",
          isActive
            ? "text-terminal-white"
            : "text-terminal-white/60 hover:text-terminal-white/90"
        )}
      >
        {children}
      </span>
      {isActive && (
        <motion.span
          layoutId="nav-active-indicator"
          className="absolute -bottom-[2px] left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#ff2975] to-[#17ffb3]"
        />
      )}
    </Link>
  );
}

export default function NavBar({ className }: NavBarProps) {
  const pathname = usePathname();
  return (
    <div
      className={cn("flex items-center p-4 text-terminal-white", className)}
    >
      <motion.div
        className="flex flex-row gap-4 sm:gap-8 items-center"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold font-abel gradient-text">
          <Link href="/">ZEZE</Link>
        </h1>
        <span className="hidden sm:block text-terminal-white/20 text-sm">/</span>
        <NavLink href="/portfolio" pathname={pathname}>
          PROFILE
        </NavLink>
        <NavLink href="/portfolio/work" pathname={pathname}>
          WORK
        </NavLink>
      </motion.div>
    </div>
  );
}
