import React from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export default function Textarea({
  label,
  error,
  className,
  ...props
}: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-slate-700 mb-2">
          {label}
          {props.required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <textarea
        className={cn(
          'w-full px-4 py-3 border rounded-lg outline-none transition-all resize-none',
          'focus:ring-2 focus:ring-red-500 focus:border-transparent',
          error ? 'border-red-500' : 'border-slate-300',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}