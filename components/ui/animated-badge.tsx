"use client"

import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/components/animations/motion"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  animate?: boolean
}

function AnimatedBadge({ className, variant, animate = true, ...props }: BadgeProps) {
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion or animation is disabled, render without animation
  if (prefersReducedMotion || !animate) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />
  }

  return (
    <motion.div
      className={cn(badgeVariants({ variant }), className)}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      {...props}
    />
  )
}

export { AnimatedBadge }

