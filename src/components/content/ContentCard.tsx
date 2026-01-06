"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Content } from '@/types'
import { modules } from '@/data/modules'
import { CONTENT_TYPE_LABELS, CONTENT_TYPE_COLORS } from '@/lib/constants'
import { formatDateShort } from '@/lib/utils'
import {
  FileText, Play, BookOpen, ExternalLink, Download, Eye,
  Clock, User, Calendar
} from 'lucide-react'

const typeIcons: Record<string, React.ElementType> = {
  apostila: FileText,
  video: Play,
  revista: BookOpen,
  link: ExternalLink
}

interface ContentCardProps {
  content: Content
  onView?: () => void
  onDownload?: () => void
}

export function ContentCard({ content, onView, onDownload }: ContentCardProps) {
  const Icon = typeIcons[content.type] || FileText
  const module = modules.find(m => m.id === content.moduleId)
  const typeColor = CONTENT_TYPE_COLORS[content.type]

  return (
    <Card className="group h-full card-hover overflow-hidden">
      <CardContent className="p-0">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-[var(--muted)] overflow-hidden">
          {content.thumbnail ? (
            <Image
              src={content.thumbnail}
              alt={content.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: `${typeColor}20` }}
            >
              <Icon className="h-12 w-12" style={{ color: typeColor }} />
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white text-[var(--text-primary)]"
              onClick={onView}
            >
              <Eye className="h-4 w-4 mr-1" />
              Ver
            </Button>
            {(content.type === 'apostila' || content.type === 'revista') && (
              <Button
                size="sm"
                variant="secondary"
                className="bg-white text-[var(--text-primary)]"
                onClick={onDownload}
              >
                <Download className="h-4 w-4 mr-1" />
                Baixar
              </Button>
            )}
          </div>

          {/* Type badge */}
          <Badge
            className="absolute top-3 left-3 text-white"
            style={{ backgroundColor: typeColor }}
          >
            <Icon className="h-3 w-3 mr-1" />
            {CONTENT_TYPE_LABELS[content.type]}
          </Badge>

          {/* Duration for videos */}
          {content.duration && (
            <Badge
              variant="secondary"
              className="absolute bottom-3 right-3 bg-black/70 text-white"
            >
              <Clock className="h-3 w-3 mr-1" />
              {content.duration}
            </Badge>
          )}
        </div>

        {/* Content info */}
        <div className="p-4">
          {/* Module tag */}
          {module && (
            <Badge
              variant="outline"
              className="mb-2 text-xs"
              style={{ borderColor: module.color, color: module.color }}
            >
              {module.title}
            </Badge>
          )}

          <h3 className="font-semibold text-[var(--text-primary)] mb-2 line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
            {content.title}
          </h3>

          <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-3">
            {content.description}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
            {content.author && (
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {content.author}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formatDateShort(content.publishedAt)}
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {content.views.toLocaleString('pt-BR')} views
            </span>
            {content.downloads > 0 && (
              <span className="flex items-center gap-1">
                <Download className="h-3 w-3" />
                {content.downloads.toLocaleString('pt-BR')} downloads
              </span>
            )}
            {content.fileSize && (
              <span className="ml-auto">
                {content.fileSize}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
