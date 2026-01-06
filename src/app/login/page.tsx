"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { LoginForm } from '@/components/auth/LoginForm'

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="animate-pulse">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-primary">
            <span className="text-2xl font-bold text-white">C+</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[var(--background)]">
        <LoginForm />
      </div>

      {/* Right side - Image/Branding (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-primary opacity-90" />

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur mb-8">
            <span className="text-4xl font-bold">C+</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            CONVIVA<span className="text-[var(--accent)]">+</span>
          </h1>

          <p className="text-xl mb-8 max-w-md opacity-90">
            Plataforma de Educação Socioemocional
          </p>

          <div className="space-y-4 max-w-md text-left">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                <span className="text-sm">📚</span>
              </div>
              <div>
                <h3 className="font-semibold">Conteúdo Exclusivo</h3>
                <p className="text-sm opacity-80">Apostilas, vídeos e revistas digitais para o desenvolvimento socioemocional</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                <span className="text-sm">🎯</span>
              </div>
              <div>
                <h3 className="font-semibold">Trilhas de Aprendizado</h3>
                <p className="text-sm opacity-80">Módulos organizados por competências socioemocionais</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                <span className="text-sm">📱</span>
              </div>
              <div>
                <h3 className="font-semibold">Acesso em Qualquer Lugar</h3>
                <p className="text-sm opacity-80">Plataforma responsiva para computadores, tablets e celulares</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 rounded-xl bg-white/10 backdrop-blur max-w-md">
            <p className="text-sm italic mb-4">
              "O CONVIVA+ transformou a forma como trabalhamos as competências socioemocionais em nossa escola. Os alunos estão mais engajados e os resultados são visíveis!"
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20" />
              <div className="text-left">
                <p className="font-semibold text-sm">Prof. Maria Silva</p>
                <p className="text-xs opacity-80">Escola Municipal São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
