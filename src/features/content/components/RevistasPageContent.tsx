"use client"

import React, { useState } from 'react'
import { BookOpen } from 'lucide-react'
import { Content } from '@/types'
import { useContents, useModules } from '@/hooks/useDataStore'
import { ContentPageHeader } from './ContentPageHeader'
import { ContentList } from './ContentList'
import { StatsBadge } from '@/components/shared'
import { PDFViewer } from '@/components/content/PDFViewer'

export function RevistasPageContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [moduleFilter, setModuleFilter] = useState('all')
  const [selectedContent, setSelectedContent] = useState<Content | null>(null)
  const [viewerOpen, setViewerOpen] = useState(false)

  const { contents, incrementViews, incrementDownloads } = useContents()
  const { modules } = useModules()

  const revistas = contents.filter(c => c.type === 'revista' && c.isActive)

  const filteredRevistas = revistas.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesModule = moduleFilter === 'all' || content.moduleId.toString() === moduleFilter
    return matchesSearch && matchesModule
  })

  const handleView = (content: Content) => {
    setSelectedContent(content)
    setViewerOpen(true)
    incrementViews(content.id)
  }

  const handleDownload = (content: Content) => {
    incrementDownloads(content.id)
    // Trigger actual download
    const link = document.createElement('a')
    link.href = `https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf`
    link.download = `${content.title.replace(/\s+/g, '-').toLowerCase()}.pdf`
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePdfDownload = () => {
    if (selectedContent) {
      incrementDownloads(selectedContent.id)
    }
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <ContentPageHeader
        title="Revistas Digitais"
        description="Publicações e materiais de leitura interativa"
        icon={BookOpen}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        moduleFilter={moduleFilter}
        onModuleFilterChange={setModuleFilter}
        searchPlaceholder="Buscar revistas..."
        modules={modules}
      />

      <div className="flex gap-4 flex-wrap">
        <StatsBadge label={`${filteredRevistas.length} revistas disponíveis`} color="primary" />
      </div>

      <ContentList
        contents={filteredRevistas}
        emptyIcon={BookOpen}
        emptyMessage="Nenhuma revista encontrada"
        onView={handleView}
        onDownload={handleDownload}
      />

      <PDFViewer
        content={selectedContent}
        open={viewerOpen}
        onOpenChange={setViewerOpen}
        onDownload={handlePdfDownload}
      />
    </div>
  )
}
