"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { modules } from '@/data/modules'
import { contents } from '@/data/content'

export function ModuleEngagementCard() {
  const moduleStats = modules.map(module => {
    const moduleContents = contents.filter(c => c.moduleId === module.id)
    const totalViews = moduleContents.reduce((acc, c) => acc + c.views, 0)
    return { module, totalViews }
  })

  const maxViews = Math.max(...moduleStats.map(m => m.totalViews))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engajamento por Módulo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {moduleStats.map(({ module, totalViews }) => {
            const percentage = maxViews > 0 ? (totalViews / maxViews) * 100 : 0

            return (
              <div key={module.id} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--text-secondary)] truncate max-w-[150px]">
                    {module.title}
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">
                    {totalViews.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: module.color
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
