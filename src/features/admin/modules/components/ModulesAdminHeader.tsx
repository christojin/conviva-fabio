"use client"

import React from 'react'
import { Layers, Plus } from 'lucide-react'
import { PageHeader } from '@/components/shared'
import { Button } from '@/components/ui/button'

interface ModulesAdminHeaderProps {
  onAddModule: () => void
}

export function ModulesAdminHeader({ onAddModule }: ModulesAdminHeaderProps) {
  return (
    <PageHeader
      title="Gestão de Módulos"
      description="Organize os módulos de aprendizado"
      icon={Layers}
      iconColor="var(--primary)"
      actions={
        <Button onClick={onAddModule}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Módulo
        </Button>
      }
    />
  )
}
