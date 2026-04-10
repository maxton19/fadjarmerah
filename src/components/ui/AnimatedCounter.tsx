'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  to: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ to, suffix = '', duration = 2200 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)
  const frame = useRef<number>(undefined)
  const start = useRef<number>(undefined)

  useEffect(() => {
    if (!inView) return

    const animate = (ts: number) => {
      if (!start.current) start.current = ts
      const elapsed = ts - start.current
      const progress = Math.min(elapsed / duration, 1)
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * to))
      if (progress < 1) {
        frame.current = requestAnimationFrame(animate)
      } else {
        setCount(to)
      }
    }

    frame.current = requestAnimationFrame(animate)
    return () => { if (frame.current) cancelAnimationFrame(frame.current) }
  }, [inView, to, duration])

  return <span ref={ref}>{count.toLocaleString('id-ID')}{suffix}</span>
}
