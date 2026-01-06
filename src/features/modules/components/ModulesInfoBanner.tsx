"use client"

import React from 'react'
import { InfoBanner } from '@/components/shared'

export function ModulesInfoBanner() {
  return (
    <InfoBanner variant="gradient">
      <p className="text-sm text-[var(--text-secondary)]">
        <strong className="text-[var(--text-primary)]">Sobre os módulos:</strong>{' '}
        Cada módulo foi desenvolvido para trabalhar uma competência socioemocional específica.
        Complete as atividades em sequência para melhor aproveitamento.
      </p>
    </InfoBanner>
  )
}
