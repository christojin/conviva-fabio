"use client"

import React from 'react'

interface InfoBannerProps {
  children: React.ReactNode
  variant?: 'info' | 'gradient'
  className?: string
}

export function InfoBanner({ children, variant = 'gradient', className = '' }: InfoBannerProps) {
  const variantClasses = {
    info: 'bg-[var(--info-light)] border border-[var(--info)]/20',
    gradient: 'bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20',
  }

  return (
    <div className={`p-4 rounded-xl ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}
