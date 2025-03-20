"use client"
import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/components/animations/motion"

interface AnimatedImageProps extends NextImageProps {
  animateOnHover?: boolean
  hoverScale?: number
  animateOnView?: boolean
  containerClassName?: string
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  animateOnHover = true,
  hoverScale = 1.05,
  animateOnView = false,
  containerClassName,
  className,
  ...props
}: AnimatedImageProps) {
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, disable animations
  if (prefersReducedMotion) {
    return (
      <div className={cn("overflow-hidden", containerClassName)}>
        <NextImage src={src} alt={alt} width={width} height={height} className={className} {...props} />
      </div>
    )
  }

  return (
    <div className={cn("overflow-hidden", containerClassName)}>
      <motion.div
        initial={animateOnView ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
        whileInView={animateOnView ? { opacity: 1, scale: 1 } : {}}
        viewport={animateOnView ? { once: true, margin: "-100px" } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div whileHover={animateOnHover ? { scale: hoverScale } : {}} transition={{ duration: 0.3 }}>
          <NextImage src={src} alt={alt} width={width} height={height} className={className} {...props} />
        </motion.div>
      </motion.div>
    </div>
  )
}

