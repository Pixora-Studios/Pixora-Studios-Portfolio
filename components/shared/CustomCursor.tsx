"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handlePointerEntry = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("button, a, .interactive");
      setIsPointer(!!isClickable);

      if (target.closest(".cta-button")) {
        setCursorText("Click");
      } else {
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handlePointerEntry);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handlePointerEntry);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block">
      <motion.div
        className="fixed w-8 h-8 rounded-full border border-primary-light dark:border-primary-dark mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isPointer ? 1.5 : 1,
        }}
      />
      <motion.div
        className="fixed w-1.5 h-1.5 rounded-full bg-primary-light dark:bg-primary-dark"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          left: 13,
          top: 13,
        }}
      />
      <AnimatePresence>
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed text-[10px] font-bold text-white uppercase tracking-widest mix-blend-difference"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              left: 4,
              top: 36,
            }}
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
