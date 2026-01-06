"use client"

import React, { useState } from 'react'
import { Link2 } from 'lucide-react'
import { getContentByType } from '@/data/content'
import { ContentPageHeader } from './ContentPageHeader'
import { ContentList } from './ContentList'
import { StatsBadge } from '@/components/shared'

export function LinksPageContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [moduleFilter, setModuleFilter] = useState('all')

  const links = getContentByType('link')

  const filteredLinks = links.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesModule = moduleFilter === 'all' || content.moduleId.toString() === moduleFilter
    return matchesSearch && matchesModule
  })

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
      />

      <div className="flex gap-4 flex-wrap">
        <StatsBadge label={`${filteredLinks.length} links disponíveis`} color="primary" />
      </div>

      <ContentList
        contents={filteredLinks}
        emptyIcon={Link2}
        emptyMessage="Nenhum link encontrado"
      />
    </div>
  )
}
