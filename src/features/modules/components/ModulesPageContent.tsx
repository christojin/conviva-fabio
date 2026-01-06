"use client"

import React, { useState } from 'react'
import { modules } from '@/data/modules'
import { ModulesHeader } from './ModulesHeader'
import { ModulesInfoBanner } from './ModulesInfoBanner'
import { ModulesGrid } from './ModulesGrid'

export function ModulesPageContent() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredModules = modules.filter(module =>
    module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    module.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-fadeIn">
      <ModulesHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ModulesInfoBanner />
      <ModulesGrid modules={filteredModules} />
    </div>
  )
}
