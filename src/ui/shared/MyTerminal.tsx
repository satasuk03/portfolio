"use client";
import { motion } from "motion/react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/Terminal";
import { InteractiveHoverButton } from "../components/InteractiveHoverButton";
import { redirect } from "next/navigation";

interface MyTerminalProps {
  redirectTo: string;
}

export function MyTerminal({ redirectTo }: MyTerminalProps) {
  const onButtonClick = () => {
    redirect(redirectTo);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Terminal
        title="zeze-portfolio"
        className="sm:w-[500px] w-[310px] h-[300px] sm:h-[450px] sm:text-sm text-xs"
      >
        <TypingAnimation className="text-[#ededea]">
          &gt; init zeze-portfolio
        </TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Loading developer profile.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Scanning engineeering skill matrix..</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Analyzing project history.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Compiling experience database.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Portfolio assets loaded successfully.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-yellow-500">
          <span>⚠ High creativity levels detected!</span>
        </AnimatedSpan>

        <TypingAnimation delay={4500} className="text-[#ededea] text-wrap">
          &gt; Welcome to my digital workspace. I&apos;m Zeze
        </TypingAnimation>
      </Terminal>

      <div className="flex justify-center items-center mt-4">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 5500 / 1000 }}
        >
          <InteractiveHoverButton onClick={onButtonClick}>
            Explore My World 🌎
          </InteractiveHoverButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
