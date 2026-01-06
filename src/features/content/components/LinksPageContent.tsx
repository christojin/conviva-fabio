"use client"

import React, { useState } from 'react'
import { Link2 } from 'lucide-react'
import { Content } from '@/types'
import { useContents, useModules } from '@/hooks/useDataStore'
import { ContentPageHeader } from './ContentPageHeader'
import { ContentList } from './ContentList'
import { StatsBadge, InfoBanner } from '@/components/shared'

export function LinksPageContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [moduleFilter, setModuleFilter] = useState('all')

  const { contents, incrementViews } = useContents()
  const { modules } = useModules()

  const links = contents.filter(c => c.type === 'link' && c.isActive)

  const filteredLinks = links.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesModule = moduleFilter === 'all' || content.moduleId.toString() === moduleFilter
    return matchesSearch && matchesModule
  })

  const handleView = (content: Content) => {
    incrementViews(content.id)
    window.open(content.url, '_blank')
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <ContentPageHeader
        title="Links de Apoio"
        description="Recursos externos e materiais complementares"
        icon={Link2}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        moduleFilter={moduleFilter}
        onModuleFilterChange={setModuleFilter}
        searchPlaceholder="Buscar links..."
        modules={modules}
      />

      <InfoBanner variant="info">
        <p className="text-sm text-[var(--info)]">
          <strong>Nota:</strong> Os links abrem em uma nova aba. Estes são recursos externos selecionados para complementar seu aprendizado.
        </p>
      </InfoBanner>

      <div className="flex gap-4 flex-wrap">
        <StatsBadge label={`${filteredLinks.length} links disponíveis`} color="primary" />
      </div>

      <ContentList
        contents={filteredLinks}
        emptyIcon={Link2}
        emptyMessage="Nenhum link encontrado"
        onView={handleView}
      />
    </div>
  )
}
