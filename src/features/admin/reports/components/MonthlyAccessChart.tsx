"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { monthlyAccessData } from '@/data/activity'

export function MonthlyAccessChart() {
  const maxValue = Math.max(...monthlyAccessData.map(d => d.value))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Acessos Mensais</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between h-64 gap-1">
          {monthlyAccessData.map((month) => {
            const height = (month.value / maxValue) * 100
            return (
              <div key={month.label} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[10px] text-[var(--text-muted)]">
                  {(month.value / 1000).toFixed(1)}k
                </span>
                <div
                  className="w-full rounded-t-sm transition-all hover:opacity-80 bg-gradient-to-t from-[var(--primary)] to-[var(--primary-light)]"
                  style={{ height: `${height}%`, minHeight: '10px' }}
                />
                <span className="text-[10px] font-medium text-[var(--text-secondary)]">
                  {month.label}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
