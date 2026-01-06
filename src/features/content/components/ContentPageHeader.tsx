"use client"

import React from 'react'
import { LucideIcon } from 'lucide-react'
import { PageHeader } from '@/components/shared'
import { SearchInput, FilterSelect } from '@/components/shared'
import { modules } from '@/data/modules'

interface ContentPageHeaderProps {
  title: string
  description: string
  icon: LucideIcon
  searchQuery: string
  onSearchChange: (value: string) => void
  moduleFilter: string
  onModuleFilterChange: (value: string) => void
  searchPlaceholder?: string
}

export function ContentPageHeader({
  title,
  description,
  icon,
  searchQuery,
  onSearchChange,
  moduleFilter,
  onModuleFilterChange,
  searchPlaceholder = 'Buscar...'
}: ContentPageHeaderProps) {
  const moduleOptions = [
    { value: 'all', label: 'Todos os módulos' },
    ...modules.map(m => ({ value: m.id.toString(), label: m.title }))
  ]

  return (
    <PageHeader
      title={title}
      description={description}
      icon={icon}
      iconColor="var(--primary)"
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <SearchInput
            value={searchQuery}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
            className="w-full sm:w-64"
          />
          <FilterSelect
            value={moduleFilter}
            onChange={onModuleFilterChange}
            options={moduleOptions}
            placeholder="Filtrar por módulo"
            className="w-full sm:w-48"
          />
        </div>
      }
    />
  )
}
