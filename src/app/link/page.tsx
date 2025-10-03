"use client";
import { motion } from "motion/react";
import { BoxReveal } from "@/ui/components/BoxReveal";
import { cn } from "@/ui/utils";
import Link from "next/link";
import {
  ExternalLink,
  Heart,
  Palette,
  Camera,
  Video,
  Users,
} from "lucide-react";

const socialLinks = [
  {
    name: "Patreon",
    url: "https://www.patreon.com/c/3DZeeGee",
    description: "Tutorials & more (Free)",
    icon: Heart,
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@3dzeegee",
    description: "3D modeling tutorials & timelapses",
    icon: Video,
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/3dzeegee",
    description: "Daily 3D art updates & thoughts",
    icon: ExternalLink,
    color: "from-gray-400 to-gray-600",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/30",
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/3dzeegee.bsky.social",
    description: "Alternative social platform",
    icon: Users,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/3dzeegee",
    description: "Visual portfolio & behind-the-scenes",
    icon: Camera,
    color: "from-pink-400 to-purple-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
  },
];

export default function SocialLinksPage() {
  return (
    <div className="min-h-screen bg-terminal-black-800 text-terminal-white">
      {/* Navigation */}
      <div className="flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-2xl font-bold font-abel gradient-text hover:opacity-80 transition-opacity"
          >
            ZEZE
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/portfolio"
            className="text-lg font-abel text-terminal-white/80 hover:text-terminal-white transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <BoxReveal duration={0.8} boxClassName="bg-secondary/80">
            <h1 className="text-5xl sm:text-6xl font-bold font-architects-daughter gradient-text mb-4">
              @3DZeeGee
            </h1>
          </BoxReveal>

          <BoxReveal duration={0.8} boxClassName="bg-terminal-white/60">
            <p className="text-lg text-terminal-white/80 mb-2">
              Connect with me across all platforms
            </p>
          </BoxReveal>

          <BoxReveal
            duration={0.8}
            boxClassName="bg-gradient-to-br from-[#ff2975] from-35% to-[#17ffb3]"
          >
            <div className="flex items-center justify-center gap-2 text-sm font-abel">
              <Palette className="w-4 h-4" />
              <span className="gradient-text font-semibold">
                All about 3D modeling & digital art
              </span>
            </div>
          </BoxReveal>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block h-full p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg group flex flex-col",
                    link.bgColor,
                    link.borderColor,
                    "hover:border-opacity-60 hover:bg-opacity-20"
                  )}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={cn(
                        "p-3 rounded-lg bg-gradient-to-br transition-all duration-300 group-hover:scale-110",
                        link.color
                      )}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold font-abel text-terminal-white mb-2 group-hover:text-secondary transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-terminal-white/70 mb-3 flex-1">
                        {link.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-terminal-white/60 mt-auto">
                        <ExternalLink className="w-3 h-3" />
                        <span>Click to visit</span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-center mt-12"
        >
          <BoxReveal duration={0.5} boxClassName="bg-terminal-white/20">
            <p className="text-terminal-white/80 text-sm font-abel">
              All content is{" "}
              <span className="text-secondary font-semibold">
                completely free
              </span>{" "}
              to access and enjoy!
            </p>
          </BoxReveal>
        </motion.div>
      </div>
    </div>
  );
}
