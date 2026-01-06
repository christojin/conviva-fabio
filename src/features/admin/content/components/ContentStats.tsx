"use client"

import React from 'react'
import { Content } from '@/types'
import { CONTENT_TYPE_LABELS, CONTENT_TYPE_COLORS } from '@/lib/constants'

interface ContentStatsProps {
  contents: Content[]
}

export function ContentStats({ contents }: ContentStatsProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="px-4 py-2 rounded-lg bg-[var(--secondary)]/10">
        <span className="text-sm font-medium text-[var(--secondary)]">
          {contents.length} conteúdos
        </span>
      </div>
      {Object.entries(CONTENT_TYPE_LABELS).map(([type, label]) => (
        <div
          key={type}
          className="px-4 py-2 rounded-lg"
          style={{ backgroundColor: `${CONTENT_TYPE_COLORS[type]}20` }}
        >
          <span className="text-sm font-medium" style={{ color: CONTENT_TYPE_COLORS[type] }}>
            {contents.filter(c => c.type === type).length} {label.toLowerCase()}s
          </span>
        </div>
      ))}
    </div>
  )
}
