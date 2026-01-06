"use client"

import React from 'react'
import { Content } from '@/types'
import { ContentCard } from './ContentCard'

interface ContentGridProps {
  contents: Content[]
  onView?: (content: Content) => void
  onDownload?: (content: Content) => void
}

export function ContentGrid({ contents, onView, onDownload }: ContentGridProps) {
  if (contents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--text-muted)]">Nenhum conteúdo encontrado</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contents.map((content) => (
        <ContentCard
          key={content.id}
          content={content}
          onView={() => onView?.(content)}
          onDownload={() => onDownload?.(content)}
        />
      ))}
    </div>
  )
}
