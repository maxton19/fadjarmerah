import React from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export default function Select({
  label,
  error,
  options,
  className,
  ...props
}: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-slate-700 mb-2">
          {label}
          {props.required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <select
        className={cn(
          'w-full px-4 py-3 border rounded-lg outline-none transition-all',
          'focus:ring-2 focus:ring-red-500 focus:border-transparent',
          error ? 'border-red-500' : 'border-slate-300',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}