"use client"

import React from 'react'
import { QRCodeGenerator } from '@/components/content/QRCodeGenerator'
import { QrCode } from 'lucide-react'

export default function QRCodePage() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
          <QrCode className="h-7 w-7 text-[var(--success)]" />
          Gerador de QR Code
        </h1>
        <p className="text-[var(--text-secondary)] mt-1">
          Crie QR Codes para compartilhar conteúdos em materiais impressos
        </p>
      </div>

      {/* Info */}
      <div className="p-4 rounded-xl bg-[var(--success-light)] border border-[var(--success)]/20">
        <p className="text-sm text-[var(--success)]">
          <strong>Para que serve?</strong> QR Codes podem ser impressos em apostilas físicas, cartazes ou outros materiais, permitindo que alunos e professores acessem rapidamente o conteúdo digital pelo celular.
        </p>
      </div>

      {/* Generator */}
      <QRCodeGenerator />
    </div>
  )
}
