"use client"

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon: LucideIcon
  message: string
  className?: string
}

export function EmptyState({ icon: Icon, message, className = '' }: EmptyStateProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <Icon className="h-12 w-12 text-[var(--text-muted)] mx-auto mb-4" />
      <p className="text-[var(--text-muted)]">{message}</p>
    </div>
  )
}
