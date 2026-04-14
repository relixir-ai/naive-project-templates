"use client";

// Re-export framer-motion with "use client" directive for Next.js App Router compatibility.
// Consumer projects should copy this file to src/lib/motion.ts and install framer-motion.
export {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  useAnimation,
} from "framer-motion";
