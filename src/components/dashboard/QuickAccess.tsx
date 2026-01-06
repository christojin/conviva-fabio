"use client"

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { modules } from '@/data/modules'
import { contents } from '@/data/content'
import {
  Layers,
  FileText,
  Play,
  BookOpen,
  ExternalLink,
  QrCode,
  ArrowRight,
  Zap
} from 'lucide-react'

const quickLinks = [
  {
    title: 'Módulos',
    description: 'Trilhas de aprendizado',
    href: '/dashboard/modulos',
    icon: Layers,
    color: '#FF6B35',
    count: modules.length
  },
  {
    title: 'Apostilas',
    description: 'Material de estudo',
    href: '/dashboard/apostilas',
    icon: FileText,
    color: '#2EC4B6',
    count: contents.filter(c => c.type === 'apostila').length
  },
  {
    title: 'Vídeos',
    description: 'Aulas em vídeo',
    href: '/dashboard/videos',
    icon: Play,
    color: '#FFBE0B',
    count: contents.filter(c => c.type === 'video').length
  },
  {
    title: 'Revistas',
    description: 'Edições digitais',
    href: '/dashboard/revistas',
    icon: BookOpen,
    color: '#9B59B6',
    count: contents.filter(c => c.type === 'revista').length
  },
  {
    title: 'Links',
    description: 'Recursos externos',
    href: '/dashboard/links',
    icon: ExternalLink,
    color: '#3B82F6',
    count: contents.filter(c => c.type === 'link').length
  },
  {
    title: 'QR Codes',
    description: 'Gerar códigos',
    href: '/dashboard/qrcode',
    icon: QrCode,
    color: '#10B981',
    count: null
  }
]

export function QuickAccess() {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Zap className="h-5 w-5 text-[var(--accent)]" />
          Acesso Rápido
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-4 rounded-xl border border-[var(--border)] hover:border-transparent hover:shadow-md transition-all bg-[var(--surface)] hover:bg-gradient-to-br hover:from-[var(--surface)] hover:to-[var(--muted)]"
            >
              <div className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${link.color}20` }}
                >
                  <link.icon className="h-5 w-5" style={{ color: link.color }} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-[var(--text-primary)] text-sm">
                      {link.title}
                    </h3>
                    <ArrowRight className="h-3 w-3 text-[var(--text-muted)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">{link.description}</p>
                  {link.count !== null && (
                    <span className="text-xs font-medium mt-1 inline-block" style={{ color: link.color }}>
                      {link.count} {link.count === 1 ? 'item' : 'itens'}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
