import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white/80 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 p-6 border border-slate-200/50',
        hover && 'hover:shadow-2xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}