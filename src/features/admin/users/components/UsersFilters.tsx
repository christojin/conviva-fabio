"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { SearchInput, FilterSelect } from '@/components/shared'

interface UsersFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  roleFilter: string
  onRoleFilterChange: (value: string) => void
  statusFilter: string
  onStatusFilterChange: (value: string) => void
}

export function UsersFilters({
  searchQuery,
  onSearchChange,
  roleFilter,
  onRoleFilterChange,
  statusFilter,
  onStatusFilterChange
}: UsersFiltersProps) {
  const roleOptions = [
    { value: 'all', label: 'Todos os tipos' },
    { value: 'aluno', label: 'Alunos' },
    { value: 'professor', label: 'Professores' },
    { value: 'instrutor', label: 'Instrutores' },
  ]

  const statusOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'active', label: 'Ativos' },
    { value: 'inactive', label: 'Inativos' },
  ]

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <SearchInput
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Buscar por nome ou email..."
            className="flex-1"
          />
          <FilterSelect
            value={roleFilter}
            onChange={onRoleFilterChange}
            options={roleOptions}
            placeholder="Filtrar por tipo"
            className="w-full md:w-48"
          />
          <FilterSelect
            value={statusFilter}
            onChange={onStatusFilterChange}
            options={statusOptions}
            placeholder="Status"
            showIcon={false}
            className="w-full md:w-40"
          />
        </div>
      </CardContent>
    </Card>
  )
}
