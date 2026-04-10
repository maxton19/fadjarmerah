'use client'

import { motion, TargetAndTransition } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'

interface Props {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: Direction
  className?: string
  once?: boolean
}

const initial: Record<Direction, TargetAndTransition> = {
  up:    { opacity: 0, y: 48 },
  down:  { opacity: 0, y: -48 },
  left:  { opacity: 0, x: 48 },
  right: { opacity: 0, x: -48 },
  fade:  { opacity: 0 },
  scale: { opacity: 0, scale: 0.92 },
}

const visible: Record<Direction, TargetAndTransition> = {
  up:    { opacity: 1, y: 0 },
  down:  { opacity: 1, y: 0 },
  left:  { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  fade:  { opacity: 1 },
  scale: { opacity: 1, scale: 1 },
}

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number]

export default function AnimateOnScroll({
  children,
  delay = 0,
  duration = 0.65,
  direction = 'up',
  className = '',
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={initial[direction]}
      whileInView={visible[direction]}
      transition={{ duration, delay, ease }}
      viewport={{ once, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
