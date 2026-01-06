"use client"

import React from 'react'
import { Layers } from 'lucide-react'
import { PageHeader } from '@/components/shared'
import { SearchInput } from '@/components/shared'

interface ModulesHeaderProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function ModulesHeader({ searchQuery, onSearchChange }: ModulesHeaderProps) {
  return (
    <PageHeader
      title="Módulos de Aprendizado"
      description="Explore os módulos de competências socioemocionais"
      icon={Layers}
      iconColor="var(--primary)"
      actions={
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Buscar módulos..."
          className="w-full md:w-72"
        />
      }
    />
  )
}
