"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { adminStats } from '@/data/activity'
import { Users, FileText, Eye, Download, TrendingUp, TrendingDown } from 'lucide-react'

const stats = [
  {
    title: 'Total de Usuários',
    value: adminStats.totalUsers,
    change: adminStats.usersGrowth,
    icon: Users,
    color: '#FF6B35'
  },
  {
    title: 'Conteúdos',
    value: adminStats.totalContent,
    change: 5.2,
    icon: FileText,
    color: '#2EC4B6'
  },
  {
    title: 'Visualizações',
    value: adminStats.totalViews,
    change: adminStats.viewsGrowth,
    icon: Eye,
    color: '#FFBE0B'
  },
  {
    title: 'Downloads',
    value: adminStats.totalDownloads,
    change: adminStats.downloadsGrowth,
    icon: Download,
    color: '#9B59B6'
  }
]

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="card-hover">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="h-5 w-5" style={{ color: stat.color }} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                stat.change >= 0 ? 'text-[var(--success)]' : 'text-[var(--error)]'
              }`}>
                {stat.change >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {Math.abs(stat.change)}%
              </div>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                {formatNumber(stat.value)}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1">{stat.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
