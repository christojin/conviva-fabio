"use client"

import React, { useState } from 'react'
import { FileText } from 'lucide-react'
import { Content } from '@/types'
import { getContentByType } from '@/data/content'
import { ContentPageHeader } from './ContentPageHeader'
import { ContentList } from './ContentList'
import { StatsBadge } from '@/components/shared'
import { PDFViewer } from '@/components/content/PDFViewer'

export function ApostilasPageContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [moduleFilter, setModuleFilter] = useState('all')
  const [selectedContent, setSelectedContent] = useState<Content | null>(null)
  const [pdfOpen, setPdfOpen] = useState(false)

  const apostilas = getContentByType('apostila')

  const filteredApostilas = apostilas.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesModule = moduleFilter === 'all' || content.moduleId.toString() === moduleFilter
    return matchesSearch && matchesModule
  })

  const handleView = (content: Content) => {
    setSelectedContent(content)
    setPdfOpen(true)
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <ContentPageHeader
        title="Apostilas"
        description="Material de estudo em PDF para download"
        icon={FileText}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        moduleFilter={moduleFilter}
        onModuleFilterChange={setModuleFilter}
        searchPlaceholder="Buscar apostilas..."
      />

      <div className="flex gap-4 flex-wrap">
        <StatsBadge label={`${filteredApostilas.length} apostilas disponíveis`} color="primary" />
      </div>

      <ContentList
        contents={filteredApostilas}
        emptyIcon={FileText}
        emptyMessage="Nenhuma apostila encontrada"
        onView={handleView}
      />

      <PDFViewer
        content={selectedContent}
        open={pdfOpen}
        onOpenChange={setPdfOpen}
      />
    </div>
  )
}
