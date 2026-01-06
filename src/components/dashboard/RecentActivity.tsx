"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { getRecentActivities } from '@/data/activity'
import { CONTENT_TYPE_LABELS, ACTIVITY_TYPE_LABELS } from '@/lib/constants'
import { getInitials, formatDateTime } from '@/lib/utils'
import { Activity, Eye, Download, CheckCircle2, LogIn } from 'lucide-react'

const activityIcons: Record<string, React.ElementType> = {
  view: Eye,
  download: Download,
  complete: CheckCircle2,
  login: LogIn,
  comment: Activity
}

export function RecentActivity() {
  const activities = getRecentActivities(5)

  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="h-5 w-5 text-[var(--secondary)]" />
          Atividade Recente
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type] || Activity
            return (
              <div key={activity.id} className="flex items-start gap-3">
                <Avatar className="h-9 w-9 flex-shrink-0">
                  <AvatarImage src={activity.userAvatar} alt={activity.userName} />
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
                      {ACTIVITY_TYPE_LABELS[activity.type]}
                    </span>
                    {activity.contentTitle && (
                      <>
                        {' '}
                        <span className="font-medium text-[var(--text-primary)]">
                          {activity.contentTitle}
                        </span>
                      </>
                    )}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-[var(--text-muted)]">
                      {formatDateTime(activity.timestamp)}
                    </span>
                    {activity.contentType && (
                      <Badge variant="outline" className="text-[10px] h-4 px-1.5">
                        {CONTENT_TYPE_LABELS[activity.contentType]}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-[var(--muted)]">
                    <Icon className="h-4 w-4 text-[var(--text-muted)]" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
