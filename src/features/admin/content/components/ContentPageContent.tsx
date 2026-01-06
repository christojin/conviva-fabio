"use client"

import React, { useState } from 'react'
import { Content } from '@/types'
import { useContents } from '@/hooks/useDataStore'
import { ContentHeader } from './ContentHeader'
import { ContentFilters } from './ContentFilters'
import { ContentStats } from './ContentStats'
import { ContentTable } from './ContentTable'
import { AddContentDialog } from './AddContentDialog'
import { EditContentDialog } from './EditContentDialog'

export function ContentPageContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [moduleFilter, setModuleFilter] = useState('all')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState<Content | null>(null)

  const { contents, addContent, updateContent, deleteContent } = useContents()

  const filteredContents = contents.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === 'all' || content.type === typeFilter
    const matchesModule = moduleFilter === 'all' || content.moduleId.toString() === moduleFilter
    return matchesSearch && matchesType && matchesModule
  })

  const handleAddContent = (contentData: Parameters<typeof addContent>[0]) => {
    addContent(contentData)
  }

  const handleUpdateContent = (id: number, contentData: Partial<Content>) => {
    updateContent(id, contentData)
  }

  const handleDeleteContent = (content: Content) => {
    if (confirm(`Tem certeza que deseja excluir o conteúdo "${content.title}"?`)) {
      deleteContent(content.id)
    }
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <ContentHeader onAddContent={() => setIsAddDialogOpen(true)} />

      <ContentFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        moduleFilter={moduleFilter}
        onModuleFilterChange={setModuleFilter}
      />

      <ContentStats contents={filteredContents} />

      <ContentTable
        contents={filteredContents}
        onEditContent={setSelectedContent}
        onDeleteContent={handleDeleteContent}
      />

      <AddContentDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAddContent={handleAddContent}
      />

      <EditContentDialog
        content={selectedContent}
        onClose={() => setSelectedContent(null)}
        onUpdateContent={handleUpdateContent}
      />
    </div>
  )
}
