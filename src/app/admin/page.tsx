"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { adminStats, weeklyAccessData, contentTypeDistribution, userRoleDistribution, getRecentActivities } from '@/data/activity'
import { users } from '@/data/users'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials, formatDateTime } from '@/lib/utils'
import { ROLE_LABELS } from '@/lib/constants'
import {
  LayoutDashboard, Users, FileText, Eye, Download,
  TrendingUp, TrendingDown, Activity, UserPlus
} from 'lucide-react'

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

const stats = [
  {
    title: 'Total de Usuários',
    value: adminStats.totalUsers,
    change: adminStats.usersGrowth,
    icon: Users,
    color: '#FF6B35'
  },
  {
    title: 'Usuários Ativos',
    value: adminStats.activeUsers,
    change: 8.5,
    icon: UserPlus,
    color: '#10B981'
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

export default function AdminDashboardPage() {
  const recentActivities = getRecentActivities(5)
  const recentUsers = users.slice(-5).reverse()

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
          <LayoutDashboard className="h-7 w-7 text-[var(--primary)]" />
          Painel Administrativo
        </h1>
        <p className="text-[var(--text-secondary)] mt-1">
          Visão geral da plataforma CONVIVA+
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly access chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-[var(--primary)]" />
              Acessos da Semana
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-48 gap-2">
              {weeklyAccessData.map((day, index) => {
                const maxValue = Math.max(...weeklyAccessData.map(d => d.value))
                const height = (day.value / maxValue) * 100
                return (
                  <div key={day.label} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col items-center">
                      <span className="text-xs text-[var(--text-muted)] mb-1">
                        {day.value}
                      </span>
                      <div
                        className="w-full rounded-t-md transition-all hover:opacity-80"
                        style={{
                          height: `${height}%`,
                          minHeight: '20px',
                          backgroundColor: index === weeklyAccessData.length - 3 ? 'var(--primary)' : 'var(--primary-light)'
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-[var(--text-secondary)]">
                      {day.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Distribution charts */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Content types */}
            <div>
              <h4 className="text-sm font-medium text-[var(--text-primary)] mb-3">Por Tipo de Conteúdo</h4>
              <div className="space-y-2">
                {contentTypeDistribution.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[var(--text-secondary)]">{item.label}</span>
                        <span className="font-medium text-[var(--text-primary)]">{item.value}</span>
                      </div>
                      <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--primary)] rounded-full"
                          style={{ width: `${(item.value / 20) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User roles */}
            <div>
              <h4 className="text-sm font-medium text-[var(--text-primary)] mb-3">Por Tipo de Usuário</h4>
              <div className="space-y-2">
                {userRoleDistribution.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[var(--text-secondary)]">{item.label}</span>
                        <span className="font-medium text-[var(--text-primary)]">{item.value}</span>
                      </div>
                      <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--secondary)] rounded-full"
                          style={{ width: `${(item.value / 12) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-[var(--secondary)]" />
              Atividade Recente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 py-2">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={activity.userAvatar} />
                    <AvatarFallback className="text-xs">
                      {getInitials(activity.userName)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium text-[var(--text-primary)]">
                        {activity.userName.split(' ')[0]}
                      </span>{' '}
                      <span className="text-[var(--text-secondary)]">
                        {activity.description}
                      </span>
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {formatDateTime(activity.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent users */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[var(--primary)]" />
              Usuários Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center gap-3 py-2">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="text-xs">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {user.name}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {user.email}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {ROLE_LABELS[user.role]}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
