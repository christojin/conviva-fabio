"use client"

import React, { useState } from 'react'
import { Module } from '@/types'
import { modules } from '@/data/modules'
import { InfoBanner } from '@/components/shared'
import { ModulesAdminHeader } from './ModulesAdminHeader'
import { ModulesAdminList } from './ModulesAdminList'
import { AddModuleDialog } from './AddModuleDialog'
import { EditModuleDialog } from './EditModuleDialog'

export function ModulesAdminPageContent() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)

  return (
    <div className="space-y-6 animate-fadeIn">
      <ModulesAdminHeader onAddModule={() => setIsAddDialogOpen(true)} />

      <InfoBanner variant="info">
        <p className="text-sm text-[var(--info)]">
          <strong>Dica:</strong> Arraste os módulos para reorganizar a ordem de exibição.
          A ordem afeta como os módulos aparecem para os usuários.
        </p>
      </InfoBanner>

      <ModulesAdminList
        modules={modules}
        onEditModule={setSelectedModule}
      />

      <AddModuleDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
      />

      <EditModuleDialog
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
      />
    </div>
  )
}
