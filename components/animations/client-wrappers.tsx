"use client"

import React from "react"
import { motion } from "framer-motion"

// This component serves as a client boundary for the PageTransition
export function ClientPageTransitionWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// Client wrapper for FadeIn
export function ClientFadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Client wrapper for SlideIn
export function ClientSlideIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}) {
  const directionMap = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Client wrapper for StaggerChildren
export function ClientStaggerChildren({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className = "",
}: {
  children: React.ReactNode
  staggerDelay?: number
  initialDelay?: number
  className?: string
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: initialDelay + index * staggerDelay,
            duration: 0.5,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// Client wrapper for ScrollAnimation
export function ClientScrollAnimation({
  children,
  threshold = 0.1,
  className = "",
}: {
  children: React.ReactNode
  threshold?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

