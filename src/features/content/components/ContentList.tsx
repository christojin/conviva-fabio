"use client"

import React from 'react'
import { LucideIcon } from 'lucide-react'
import { Content } from '@/types'
import { ContentCard } from '@/components/content/ContentCard'
import { EmptyState } from '@/components/shared'

interface ContentListProps {
  contents: Content[]
  emptyIcon: LucideIcon
  emptyMessage: string
  onView?: (content: Content) => void
}

export function ContentList({ contents, emptyIcon, emptyMessage, onView }: ContentListProps) {
  if (contents.length === 0) {
    return <EmptyState icon={emptyIcon} message={emptyMessage} />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contents.map((content) => (
        <ContentCard
          key={content.id}
          content={content}
          onView={onView ? () => onView(content) : undefined}
        />
      ))}
    </div>
  )
}
