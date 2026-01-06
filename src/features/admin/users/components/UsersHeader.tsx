"use client"

import React from 'react'
import { Users, Plus } from 'lucide-react'
import { PageHeader } from '@/components/shared'
import { Button } from '@/components/ui/button'

interface UsersHeaderProps {
  onAddUser: () => void
}

export function UsersHeader({ onAddUser }: UsersHeaderProps) {
  return (
    <PageHeader
      title="Gestão de Usuários"
      description="Gerencie os usuários da plataforma"
      icon={Users}
      iconColor="var(--primary)"
      actions={
        <Button onClick={onAddUser}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Usuário
        </Button>
      }
    />
  )
}
