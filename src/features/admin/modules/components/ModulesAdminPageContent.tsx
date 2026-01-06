"use client"

import React, { useState } from 'react'
import { Module } from '@/types'
import { useModules, useContents } from '@/hooks/useDataStore'
import { InfoBanner } from '@/components/shared'
import { ModulesAdminHeader } from './ModulesAdminHeader'
import { ModulesAdminList } from './ModulesAdminList'
import { AddModuleDialog } from './AddModuleDialog'
import { EditModuleDialog } from './EditModuleDialog'

export function ModulesAdminPageContent() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)

  const { modules, addModule, updateModule, deleteModule } = useModules()
  const { contents } = useContents()

  const handleAddModule = (moduleData: Parameters<typeof addModule>[0]) => {
    addModule(moduleData)
  }

  const handleUpdateModule = (id: number, moduleData: Partial<Module>) => {
    updateModule(id, moduleData)
  }

  const handleDeleteModule = (module: Module) => {
    const moduleContents = contents.filter(c => c.moduleId === module.id)
    const warningMessage = moduleContents.length > 0
      ? `Este módulo possui ${moduleContents.length} conteúdo(s) associado(s). Tem certeza que deseja excluir o módulo "${module.title}"?`
      : `Tem certeza que deseja excluir o módulo "${module.title}"?`

    if (confirm(warningMessage)) {
      deleteModule(module.id)
    }
  }

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
        contents={contents}
        onEditModule={setSelectedModule}
        onDeleteModule={handleDeleteModule}
      />

      <AddModuleDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        modulesCount={modules.length}
        onAddModule={handleAddModule}
      />

      <EditModuleDialog
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
        onUpdateModule={handleUpdateModule}
      />
    </div>
  )
}
