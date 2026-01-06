"use client"

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Content } from '@/types'
import { Download, ExternalLink, FileText, Check } from 'lucide-react'

interface PDFViewerProps {
  content: Content | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onDownload?: () => void
}

export function PDFViewer({ content, open, onOpenChange, onDownload }: PDFViewerProps) {
  const [downloaded, setDownloaded] = React.useState(false)

  if (!content) return null

  const handleOpenInNewTab = () => {
    // For demo, open a sample PDF or show alert
    const demoUrl = `https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf`
    window.open(demoUrl, '_blank')
  }

  const handleDownload = () => {
    // Simulate download
    onDownload?.()
    setDownloaded(true)

    // Create a demo download - in production this would be the actual file
    const link = document.createElement('a')
    link.href = `https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf`
    link.download = `${content.title.replace(/\s+/g, '-').toLowerCase()}.pdf`
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Reset downloaded state after 3 seconds
    setTimeout(() => setDownloaded(false), 3000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-[var(--primary)]" />
            {content.title}
          </DialogTitle>
        </DialogHeader>

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
            <Button variant="outline" onClick={handleOpenInNewTab}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Abrir em nova aba
            </Button>
            <Button onClick={handleDownload} disabled={downloaded}>
              {downloaded ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Baixado!
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Baixar PDF
                </>
              )}
            </Button>
          </div>
        </div>

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
