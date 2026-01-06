"use client"

import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ROLE_LABELS } from '@/lib/constants'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function WelcomeCard() {
  const { user } = useAuth()

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Bom dia'
    if (hour < 18) return 'Boa tarde'
    return 'Boa noite'
  }

  const getMotivationalMessage = () => {
    const messages = [
      'Pronto para mais uma jornada de aprendizado?',
      'Continue sua evolução socioemocional!',
      'Cada passo conta na sua jornada!',
      'Vamos desenvolver novas habilidades hoje?',
      'O conhecimento transforma vidas!'
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-primary opacity-90" />

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <CardContent className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-[var(--accent)]" />
                <span className="text-sm font-medium text-white/80">
                  {ROLE_LABELS[user?.role || 'aluno']}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {getGreeting()}, {user?.name?.split(' ')[0]}! 👋
              </h1>
              <p className="text-white/80 text-sm md:text-base max-w-md">
                {getMotivationalMessage()}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-[var(--primary)] hover:bg-white/90"
              >
                <Link href="/dashboard/modulos">
                  Explorar Módulos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
