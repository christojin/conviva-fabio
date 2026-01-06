"use client"

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Content } from '@/types'
import { Download, ExternalLink, FileText } from 'lucide-react'

interface PDFViewerProps {
  content: Content | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PDFViewer({ content, open, onOpenChange }: PDFViewerProps) {
  if (!content) return null

  // For demo purposes, show a placeholder since we don't have actual PDFs
  const isPDFAvailable = false

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-[var(--primary)]" />
            {content.title}
          </DialogTitle>
        </DialogHeader>

        {isPDFAvailable ? (
          <div className="flex-1 overflow-hidden rounded-lg border border-[var(--border)]">
            <iframe
              src={content.url}
              title={content.title}
              className="w-full h-[70vh]"
            />
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center py-12 bg-[var(--muted)] rounded-lg">
            <div className="p-4 rounded-full bg-[var(--primary)]/10 mb-4">
              <FileText className="h-12 w-12 text-[var(--primary)]" />
            </div>
            <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
              Visualização do PDF
            </h3>
            <p className="text-sm text-[var(--text-secondary)] text-center max-w-md mb-6">
              {content.description}
            </p>
            <p className="text-xs text-[var(--text-muted)] mb-6">
              Tamanho do arquivo: {content.fileSize || 'N/A'}
            </p>
            <div className="flex gap-3">
              <Button variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Abrir em nova aba
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Baixar PDF
              </Button>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--text-muted)]">
            Autor: {content.author || 'Equipe CONVIVA+'} •
            Publicado em: {new Date(content.publishedAt).toLocaleDateString('pt-BR')}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
