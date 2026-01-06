"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { userModuleProgress } from '@/data/activity'
import { modules } from '@/data/modules'
import { TrendingUp, Award, Target } from 'lucide-react'

export function ProgressCard() {
  const totalProgress = Math.round(
    userModuleProgress.reduce((acc, m) => acc + m.progress, 0) / userModuleProgress.length
  )

  const completedModules = userModuleProgress.filter(m => m.progress === 100).length
  const totalModules = modules.length

  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Target className="h-5 w-5 text-[var(--primary)]" />
          Seu Progresso
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Overall progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--text-secondary)]">Progresso Geral</span>
            <span className="text-2xl font-bold text-[var(--primary)]">{totalProgress}%</span>
          </div>
          <Progress value={totalProgress} className="h-3" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 rounded-lg bg-[var(--success-light)]">
            <div className="flex items-center gap-2 mb-1">
              <Award className="h-4 w-4 text-[var(--success)]" />
              <span className="text-xs font-medium text-[var(--success)]">Concluídos</span>
            </div>
            <p className="text-xl font-bold text-[var(--success)]">
              {completedModules}/{totalModules}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-[var(--info-light)]">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-[var(--info)]" />
              <span className="text-xs font-medium text-[var(--info)]">Em andamento</span>
            </div>
            <p className="text-xl font-bold text-[var(--info)]">
              {userModuleProgress.filter(m => m.progress > 0 && m.progress < 100).length}
            </p>
          </div>
        </div>

        {/* Module progress list */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-[var(--text-primary)]">Por Módulo</h4>
          {userModuleProgress.slice(0, 3).map((moduleProgress) => {
            const module = modules.find(m => m.id === moduleProgress.moduleId)
            return (
              <div key={moduleProgress.moduleId} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--text-secondary)] truncate max-w-[180px]">
                    {moduleProgress.moduleTitle}
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">
                    {moduleProgress.progress}%
                  </span>
                </div>
                <Progress
                  value={moduleProgress.progress}
                  indicatorColor={module?.color}
                  className="h-2"
                />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
