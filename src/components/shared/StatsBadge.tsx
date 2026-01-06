"use client"

import React from 'react'

interface StatsBadgeProps {
  label: string
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info'
}

const colorClasses = {
  primary: 'bg-[var(--primary)]/10 text-[var(--primary)]',
  success: 'bg-[var(--success)]/10 text-[var(--success)]',
  warning: 'bg-[var(--warning)]/10 text-[var(--warning)]',
  error: 'bg-[var(--error)]/10 text-[var(--error)]',
  info: 'bg-[var(--info)]/10 text-[var(--info)]',
}

export function StatsBadge({ label, color = 'primary' }: StatsBadgeProps) {
  return (
    <div className={`px-4 py-2 rounded-lg ${colorClasses[color]}`}>
      <span className="text-sm font-medium">
        {label}
      </span>
    </div>
  )
}
