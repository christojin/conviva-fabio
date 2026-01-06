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

// Demo PDF URL for demonstration purposes
const DEMO_PDF_URL = 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf'

export function PDFViewer({ content, open, onOpenChange, onDownload }: PDFViewerProps) {
  const [downloaded, setDownloaded] = React.useState(false)

  if (!content) return null

  // Use actual content URL if it's a valid URL, otherwise use demo PDF
  const pdfUrl = content.url.startsWith('http') ? content.url : DEMO_PDF_URL

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank')
  }

  const handleDownload = () => {
    onDownload?.()
    setDownloaded(true)

    // Create download link
    const link = document.createElement('a')
    link.href = pdfUrl
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

        {/* PDF Preview Area */}
        <div className="flex-1 min-h-[400px] bg-[var(--muted)] rounded-lg overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full min-h-[400px] border-0"
            title={content.title}
          />
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            Autor: {content.author || 'Equipe CONVIVA+'} •
            Publicado em: {new Date(content.publishedAt).toLocaleDateString('pt-BR')}
            {content.fileSize && ` • Tamanho: ${content.fileSize}`}
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
      </DialogContent>
    </Dialog>
  )
}
