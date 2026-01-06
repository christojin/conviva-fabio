"use client"

import React from 'react'
import { Module, Content } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GripVertical, Edit, Trash2, Heart, Users, Compass, Brain, MessageCircle } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Heart, Users, Compass, Brain, MessageCircle
}

interface ModulesAdminListProps {
  modules: Module[]
  contents: Content[]
  onEditModule: (module: Module) => void
  onDeleteModule: (module: Module) => void
}

export function ModulesAdminList({ modules, contents, onEditModule, onDeleteModule }: ModulesAdminListProps) {
  return (
    <div className="space-y-4">
      {modules.map((module, index) => {
        const Icon = iconMap[module.icon] || Heart
        const moduleContents = contents.filter(c => c.moduleId === module.id)

        return (
          <Card key={module.id} className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                {/* Drag handle */}
                <div className="cursor-grab text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
                  <GripVertical className="h-5 w-5" />
                </div>

                {/* Order number */}
                <div className="w-8 h-8 rounded-lg bg-[var(--muted)] flex items-center justify-center text-sm font-medium text-[var(--text-secondary)]">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: module.color }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {module.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-1">
                    {module.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="hidden md:flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-[var(--text-primary)]">
                      {moduleContents.length}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">Conteúdos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold" style={{ color: module.color }}>
                      {module.totalItems}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">Total Itens</p>
                  </div>
                </div>

                {/* Status */}
                <Badge
                  variant={module.isActive ? 'success' : 'error'}
                  className={module.isActive
                    ? 'bg-[var(--success-light)] text-[var(--success)]'
                    : 'bg-[var(--error-light)] text-[var(--error)]'
                  }
                >
                  {module.isActive ? 'Ativo' : 'Inativo'}
                </Badge>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEditModule(module)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[var(--error)]"
                    onClick={() => onDeleteModule(module)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
