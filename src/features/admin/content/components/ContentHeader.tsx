"use client"

import React from 'react'
import { FolderOpen, Plus } from 'lucide-react'
import { PageHeader } from '@/components/shared'
import { Button } from '@/components/ui/button'

interface ContentHeaderProps {
  onAddContent: () => void
}

export function ContentHeader({ onAddContent }: ContentHeaderProps) {
  return (
    <PageHeader
      title="Gestão de Conteúdos"
      description="Gerencie todos os materiais da plataforma"
      icon={FolderOpen}
      iconColor="var(--secondary)"
      actions={
        <Button onClick={onAddContent}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Conteúdo
        </Button>
      }
    />
  )
}
