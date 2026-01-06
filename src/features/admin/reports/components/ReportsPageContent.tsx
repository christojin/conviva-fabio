"use client"

import React from 'react'
import { contentTypeDistribution, userRoleDistribution } from '@/data/activity'
import { ReportsHeader } from './ReportsHeader'
import { KeyMetricsCards } from './KeyMetricsCards'
import { MonthlyAccessChart } from './MonthlyAccessChart'
import { PopularContentsCard } from './PopularContentsCard'
import { DistributionCard } from './DistributionCard'
import { ModuleEngagementCard } from './ModuleEngagementCard'

export function ReportsPageContent() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <ReportsHeader />

      <KeyMetricsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlyAccessChart />
        <PopularContentsCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DistributionCard
          title="Por Tipo de Conteúdo"
          data={contentTypeDistribution}
          color="var(--primary)"
        />
        <DistributionCard
          title="Por Tipo de Usuário"
          data={userRoleDistribution}
          color="var(--secondary)"
        />
        <ModuleEngagementCard />
      </div>
    </div>
  )
}
