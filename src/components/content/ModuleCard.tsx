"use client"

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Module } from '@/types'
import { userModuleProgress } from '@/data/activity'
import {
  Heart, Users, Compass, Brain, MessageCircle, Star, Smile,
  HandHeart, Lightbulb, Target, Sparkles, Shield, Flame, Leaf, Sun,
  ArrowRight
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Heart, Users, Compass, Brain, MessageCircle, Star, Smile,
  HandHeart, Lightbulb, Target, Sparkles, Shield, Flame, Leaf, Sun
}

interface ModuleCardProps {
  module: Module
  showProgress?: boolean
}

export function ModuleCard({ module, showProgress = true }: ModuleCardProps) {
  const Icon = iconMap[module.icon] || Heart
  const progress = userModuleProgress.find(p => p.moduleId === module.id)

  return (
    <Link href={`/dashboard/modulos/${module.id}`}>
      <Card className="group h-full card-hover overflow-hidden border-2 border-transparent hover:border-[var(--primary)]/30">
        <CardContent className="p-0">
          {/* Header with color */}
          <div
            className="relative p-6 pb-12"
            style={{ backgroundColor: `${module.color}15` }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${module.color.replace('#', '%23')}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative flex items-start justify-between">
              <div
                className="p-3 rounded-xl shadow-md transition-transform group-hover:scale-110"
                style={{ backgroundColor: module.color }}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <Badge variant="outline" className="bg-white/80">
                {module.totalItems} itens
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 pt-4 -mt-8 relative">
            <div className="bg-[var(--surface)] rounded-xl p-4 shadow-sm border border-[var(--border)]">
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                {module.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">
                {module.description}
              </p>

              {/* Progress */}
              {showProgress && progress && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-muted)]">Progresso</span>
                    <span className="font-medium" style={{ color: module.color }}>
                      {progress.progress}%
                    </span>
                  </div>
                  <Progress
                    value={progress.progress}
                    indicatorColor={module.color}
                    className="h-2"
                  />
                  <p className="text-xs text-[var(--text-muted)]">
                    {progress.completedItems} de {progress.totalItems} concluídos
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[var(--primary)] group-hover:underline">
                  {progress && progress.progress > 0 ? 'Continuar' : 'Começar'}
                </span>
                <ArrowRight
                  className="h-4 w-4 text-[var(--primary)] transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
