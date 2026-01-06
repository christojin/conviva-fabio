"use client"

import React from 'react'
import { Layers } from 'lucide-react'
import { Module } from '@/types'
import { ModuleCard } from '@/components/content/ModuleCard'
import { EmptyState } from '@/components/shared'

interface ModulesGridProps {
  modules: Module[]
}

export function ModulesGrid({ modules }: ModulesGridProps) {
  if (modules.length === 0) {
    return <EmptyState icon={Layers} message="Nenhum módulo encontrado" />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  )
}
