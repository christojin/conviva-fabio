"use client"

import React from 'react'
import { Content } from '@/types'
import { modules } from '@/data/modules'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CONTENT_TYPE_LABELS, CONTENT_TYPE_COLORS } from '@/lib/constants'
import { formatDateShort } from '@/lib/utils'
import { Edit, Trash2, Eye, Download, FileText, Play, BookOpen, ExternalLink, FolderOpen } from 'lucide-react'
import { EmptyState } from '@/components/shared'

const typeIcons: Record<string, React.ElementType> = {
  apostila: FileText,
  video: Play,
  revista: BookOpen,
  link: ExternalLink
}

interface ContentTableProps {
  contents: Content[]
  onEditContent: (content: Content) => void
  onDeleteContent?: (content: Content) => void
}

export function ContentTable({ contents, onEditContent, onDeleteContent }: ContentTableProps) {
  if (contents.length === 0) {
    return (
      <Card>
        <CardContent className="p-0">
          <EmptyState icon={FolderOpen} message="Nenhum conteúdo encontrado" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)]">Conteúdo</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)]">Tipo</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)] hidden md:table-cell">Módulo</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)] hidden lg:table-cell">Stats</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)] hidden lg:table-cell">Publicação</th>
                <th className="text-right p-4 text-sm font-medium text-[var(--text-muted)]">Ações</th>
              </tr>
            </thead>
            <tbody>
              {contents.map((content) => {
                const Icon = typeIcons[content.type] || FileText
                const module = modules.find(m => m.id === content.moduleId)
                return (
                  <tr key={content.id} className="border-b border-[var(--border)] hover:bg-[var(--surface-hover)]">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${CONTENT_TYPE_COLORS[content.type]}20` }}
                        >
                          <Icon
                            className="h-5 w-5"
                            style={{ color: CONTENT_TYPE_COLORS[content.type] }}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-[var(--text-primary)] line-clamp-1">
                            {content.title}
                          </p>
                          <p className="text-sm text-[var(--text-muted)] line-clamp-1">
                            {content.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        className="text-white"
                        style={{ backgroundColor: CONTENT_TYPE_COLORS[content.type] }}
                      >
                        {CONTENT_TYPE_LABELS[content.type]}
                      </Badge>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      {module && (
                        <Badge variant="outline" style={{ borderColor: module.color, color: module.color }}>
                          {module.title}
                        </Badge>
                      )}
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {content.views.toLocaleString('pt-BR')}
                        </span>
                        {content.downloads > 0 && (
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {content.downloads.toLocaleString('pt-BR')}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      <span className="text-sm text-[var(--text-muted)]">
                        {formatDateShort(content.publishedAt)}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onEditContent(content)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-[var(--error)]"
                          onClick={() => onDeleteContent?.(content)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
