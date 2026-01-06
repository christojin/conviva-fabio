"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { contents } from '@/data/content'
import { modules } from '@/data/modules'

const popularContents = contents
  .sort((a, b) => b.views - a.views)
  .slice(0, 5)

export function PopularContentsCard() {
  const maxViews = popularContents[0]?.views || 1

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conteúdos Mais Acessados</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {popularContents.map((content, index) => {
            const module = modules.find(m => m.id === content.moduleId)
            const percentage = (content.views / maxViews) * 100

            return (
              <div key={content.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--muted)] flex items-center justify-center text-xs font-medium text-[var(--text-secondary)]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)] line-clamp-1">
                        {content.title}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {module?.title}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {content.views.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: module?.color || 'var(--primary)'
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
