"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { adminStats } from '@/data/activity'
import { Users, Eye, Download, Clock, TrendingUp } from 'lucide-react'

export function KeyMetricsCards() {
  const metrics = [
    {
      icon: Users,
      iconColor: 'var(--primary)',
      bgColor: 'var(--primary)',
      value: adminStats.totalUsers.toString(),
      label: 'Total Usuários',
      growth: adminStats.usersGrowth,
    },
    {
      icon: Eye,
      iconColor: 'var(--secondary)',
      bgColor: 'var(--secondary)',
      value: `${(adminStats.totalViews / 1000).toFixed(1)}k`,
      label: 'Visualizações',
      growth: adminStats.viewsGrowth,
    },
    {
      icon: Download,
      iconColor: 'var(--accent-foreground)',
      bgColor: 'var(--accent)',
      value: `${(adminStats.totalDownloads / 1000).toFixed(1)}k`,
      label: 'Downloads',
      growth: adminStats.downloadsGrowth,
    },
    {
      icon: Clock,
      iconColor: 'var(--info)',
      bgColor: 'var(--info)',
      value: '12.5min',
      label: 'Tempo Médio',
      growth: 5.2,
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card key={index} className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${metric.bgColor}15` }}
                >
                  <Icon className="h-5 w-5" style={{ color: metric.iconColor }} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">
                    {metric.value}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">{metric.label}</p>
                </div>
              </div>
              <div className="mt-2 flex items-center text-xs text-[var(--success)]">
                <TrendingUp className="h-3 w-3 mr-1" />
                +{metric.growth}% este mês
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
