"use client"

import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { WelcomeCard } from '@/components/dashboard/WelcomeCard'
import { ProgressCard } from '@/components/dashboard/ProgressCard'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { QuickAccess } from '@/components/dashboard/QuickAccess'
import { StatsCards } from '@/components/dashboard/StatsCards'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Welcome Card */}
      <WelcomeCard />

      {/* Stats (for instructors/professors) */}
      {(user?.role === 'instrutor' || user?.role === 'professor') && (
        <StatsCards />
      )}

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Progress (for students) or Quick Access */}
        <div className="lg:col-span-2 space-y-6">
          <QuickAccess />
          {user?.role !== 'aluno' && <RecentActivity />}
        </div>

        {/* Right column - Activity or Progress */}
        <div className="space-y-6">
          {user?.role === 'aluno' ? (
            <>
              <ProgressCard />
              <RecentActivity />
            </>
          ) : (
            <ProgressCard />
          )}
        </div>
      </div>
    </div>
  )
}
