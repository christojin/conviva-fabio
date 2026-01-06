"use client"

import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { contents } from '@/data/content'
import { modules } from '@/data/modules'
import { QrCode, Download, Copy, Check, Link } from 'lucide-react'

export function QRCodeGenerator() {
  const [selectedContent, setSelectedContent] = useState<string>('')
  const [customUrl, setCustomUrl] = useState('')
  const [copied, setCopied] = useState(false)

  const baseUrl = 'https://convivamais.edu.br'
  const qrUrl = selectedContent
    ? `${baseUrl}/conteudo/${selectedContent}`
    : customUrl || `${baseUrl}/dashboard`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(qrUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const svg = document.getElementById('qr-code-svg')
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0)
        const pngFile = canvas.toDataURL('image/png')
        const downloadLink = document.createElement('a')
        downloadLink.download = 'qrcode-conviva.png'
        downloadLink.href = pngFile
        downloadLink.click()
      }
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5 text-[var(--primary)]" />
            Configurar QR Code
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Select content */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--text-primary)]">
              Selecionar Conteúdo
            </label>
            <Select value={selectedContent} onValueChange={setSelectedContent}>
              <SelectTrigger>
                <SelectValue placeholder="Escolha um conteúdo..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Nenhum (usar URL customizada)</SelectItem>
                {modules.map((module) => (
                  <React.Fragment key={module.id}>
                    <SelectItem value={`module-${module.id}`} disabled className="font-semibold text-[var(--text-muted)]">
                      📁 {module.title}
                    </SelectItem>
                    {contents
                      .filter(c => c.moduleId === module.id)
                      .map((content) => (
                        <SelectItem key={content.id} value={content.id.toString()}>
                          {content.title}
                        </SelectItem>
                      ))}
                  </React.Fragment>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Custom URL */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--text-primary)]">
              Ou insira uma URL customizada
            </label>
            <Input
              placeholder="https://..."
              value={customUrl}
              onChange={(e) => {
                setCustomUrl(e.target.value)
                setSelectedContent('')
              }}
              disabled={!!selectedContent}
            />
          </div>

          {/* Generated URL */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--text-primary)]">
              URL Gerada
            </label>
            <div className="flex gap-2">
              <Input value={qrUrl} readOnly className="bg-[var(--muted)]" />
              <Button variant="outline" size="icon" onClick={handleCopy}>
                {copied ? (
                  <Check className="h-4 w-4 text-[var(--success)]" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Info */}
          <div className="p-4 rounded-lg bg-[var(--info-light)]">
            <p className="text-sm text-[var(--info)]">
              <strong>Dica:</strong> Gere QR Codes para materiais impressos, permitindo que alunos e professores acessem rapidamente o conteúdo digital.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* QR Code Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5 text-[var(--secondary)]" />
            Preview do QR Code
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="p-6 bg-white rounded-xl shadow-inner border border-[var(--border)]">
            <QRCodeSVG
              id="qr-code-svg"
              value={qrUrl}
              size={200}
              level="H"
              includeMargin
              fgColor="var(--text-primary)"
              bgColor="white"
            />
          </div>

          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={handleCopy}>
              <Copy className="h-4 w-4 mr-2" />
              Copiar URL
            </Button>
            <Button onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Baixar PNG
            </Button>
          </div>

          <p className="mt-4 text-xs text-[var(--text-muted)] text-center">
            Escaneie o código com a câmera do seu celular para testar
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
