"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, Layers, FileText, Play, User } from 'lucide-react'

const navItems = [
  { label: 'Início', href: '/dashboard', icon: Home },
  { label: 'Módulos', href: '/dashboard/modulos', icon: Layers },
  { label: 'Apostilas', href: '/dashboard/apostilas', icon: FileText },
  { label: 'Vídeos', href: '/dashboard/videos', icon: Play },
  { label: 'Perfil', href: '/dashboard/perfil', icon: User },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--surface)] border-t border-[var(--border)] lg:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href))

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all min-w-[60px]",
                isActive
                  ? "text-[var(--primary)]"
                  : "text-[var(--text-muted)]"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 transition-all",
                isActive && "scale-110"
              )} />
              <span className={cn(
                "text-[10px] font-medium",
                isActive && "font-semibold"
              )}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--primary)]" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
