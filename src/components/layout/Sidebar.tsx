"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Home,
  Layers,
  FileText,
  Play,
  BookOpen,
  ExternalLink,
  QrCode,
  User,
  X,
  LayoutDashboard,
  Users,
  FolderOpen,
  BarChart3
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Home,
  Layers,
  FileText,
  Play,
  BookOpen,
  ExternalLink,
  QrCode,
  User,
  LayoutDashboard,
  Users,
  FolderOpen,
  BarChart3
}

const dashboardNavItems = [
  { label: 'Início', href: '/dashboard', icon: 'Home' },
  { label: 'Módulos', href: '/dashboard/modulos', icon: 'Layers' },
  { label: 'Apostilas', href: '/dashboard/apostilas', icon: 'FileText' },
  { label: 'Vídeos', href: '/dashboard/videos', icon: 'Play' },
  { label: 'Revistas', href: '/dashboard/revistas', icon: 'BookOpen' },
  { label: 'Links de Apoio', href: '/dashboard/links', icon: 'ExternalLink' },
  { label: 'QR Codes', href: '/dashboard/qrcode', icon: 'QrCode' },
]

const adminNavItems = [
  { label: 'Dashboard', href: '/admin', icon: 'LayoutDashboard' },
  { label: 'Usuários', href: '/admin/usuarios', icon: 'Users' },
  { label: 'Conteúdos', href: '/admin/conteudos', icon: 'FolderOpen' },
  { label: 'Módulos', href: '/admin/modulos', icon: 'Layers' },
  { label: 'Relatórios', href: '/admin/relatorios', icon: 'BarChart3' },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
  variant?: 'dashboard' | 'admin'
}

export function Sidebar({ isOpen = true, onClose, variant = 'dashboard' }: SidebarProps) {
  const pathname = usePathname()
  const { user } = useAuth()

  const navItems = variant === 'admin' ? adminNavItems : dashboardNavItems

  // Calculate overall progress (mock data)
  const overallProgress = 35

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-[var(--surface)] border-r border-[var(--border)] transition-transform duration-300 lg:translate-x-0 lg:static lg:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile close button */}
          <div className="flex items-center justify-between p-4 lg:hidden">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <span className="text-sm font-bold text-white">C+</span>
              </div>
              <span className="font-bold text-lg text-[var(--text-primary)]">
                CONVIVA<span className="text-[var(--primary)]">+</span>
              </span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 pt-6 lg:pt-4">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = iconMap[item.icon] || Home
                const isActive = pathname === item.href ||
                  (item.href !== '/dashboard' && item.href !== '/admin' && pathname.startsWith(item.href))

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "bg-[var(--primary)] text-white shadow-sm"
                        : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* Back to Dashboard (for admin) */}
            {variant === 'admin' && (
              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <Link
                  href="/dashboard"
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] transition-all"
                >
                  <Home className="h-5 w-5" />
                  Voltar ao Portal
                </Link>
              </div>
            )}
          </nav>

          {/* Progress section (only for dashboard) */}
          {variant === 'dashboard' && user?.role === 'aluno' && (
            <div className="p-4 border-t border-[var(--border)]">
              <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10">
                <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">
                  Seu Progresso
                </h4>
                <Progress value={overallProgress} className="h-2 mb-2" />
                <p className="text-xs text-[var(--text-secondary)]">
                  {overallProgress}% do conteúdo concluído
                </p>
              </div>
            </div>
          )}

          {/* User profile link */}
          <div className="p-4 border-t border-[var(--border)]">
            <Link
              href="/dashboard/perfil"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] transition-all"
            >
              <User className="h-5 w-5" />
              Meu Perfil
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
