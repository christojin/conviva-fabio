"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { SearchInput, FilterSelect } from '@/components/shared'
import { modules } from '@/data/modules'

interface ContentFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  typeFilter: string
  onTypeFilterChange: (value: string) => void
  moduleFilter: string
  onModuleFilterChange: (value: string) => void
}

export function ContentFilters({
  searchQuery,
  onSearchChange,
  typeFilter,
  onTypeFilterChange,
  moduleFilter,
  onModuleFilterChange
}: ContentFiltersProps) {
  const typeOptions = [
    { value: 'all', label: 'Todos os tipos' },
    { value: 'apostila', label: 'Apostilas' },
    { value: 'video', label: 'Vídeos' },
    { value: 'revista', label: 'Revistas' },
    { value: 'link', label: 'Links' },
  ]

  const moduleOptions = [
    { value: 'all', label: 'Todos os módulos' },
    ...modules.map(m => ({ value: m.id.toString(), label: m.title }))
  ]

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <SearchInput
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Buscar conteúdos..."
            className="flex-1"
          />
          <FilterSelect
            value={typeFilter}
            onChange={onTypeFilterChange}
            options={typeOptions}
            placeholder="Tipo"
            className="w-full md:w-48"
          />
          <FilterSelect
            value={moduleFilter}
            onChange={onModuleFilterChange}
            options={moduleOptions}
            placeholder="Módulo"
            showIcon={false}
            className="w-full md:w-48"
          />
        </div>
      </CardContent>
    </Card>
  )
}
