import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface ScrollIndicatorProps {
  className?: string
  color?: "light" | "dark"
}

export function ScrollIndicator({ className, color = "light" }: ScrollIndicatorProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center gap-2 cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
    >
      <motion.span
        className="text-sm font-light tracking-wider"
        style={{ color: color === "light" ? "white" : "#1a1a1a" }}
      >
        Scroll
      </motion.span>
      <motion.div
        className={cn(
          "w-[1px] h-16",
          color === "light" ? "bg-white/80" : "bg-black/80"
        )}
      >
        <motion.div
          className={cn(
            "w-full h-1/3",
            color === "light" ? "bg-white" : "bg-black"
          )}
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  )
} 