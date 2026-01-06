"use client"

import React, { useState } from 'react'
import { ContentType } from '@/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useModules } from '@/hooks/useDataStore'
import { Check, Loader2 } from 'lucide-react'

interface AddContentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddContent: (contentData: {
    title: string
    description: string
    type: ContentType
    moduleId: number
    url: string
    thumbnail?: string
    fileSize?: string
    duration?: string
    author?: string
    isActive: boolean
  }) => void
}

export function AddContentDialog({ open, onOpenChange, onAddContent }: AddContentDialogProps) {
  const { modules } = useModules()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState<ContentType>('apostila')
  const [moduleId, setModuleId] = useState('')
  const [url, setUrl] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!title || !description || !moduleId || !url) return

    setIsLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    onAddContent({
      title,
      description,
      type,
      moduleId: parseInt(moduleId),
      url,
      thumbnail: thumbnail || undefined,
      author: 'Equipe CONVIVA+',
      isActive: true,
    })

    setIsLoading(false)
    setSuccess(true)

    // Reset form and close after success
    setTimeout(() => {
      resetForm()
      onOpenChange(false)
    }, 1000)
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setType('apostila')
    setModuleId('')
    setUrl('')
    setThumbnail('')
    setSuccess(false)
  }

  const handleClose = () => {
    if (!isLoading) {
      resetForm()
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Conteúdo</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Título *</label>
            <Input
              placeholder="Título do conteúdo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Descrição *</label>
            <textarea
              placeholder="Descreva o conteúdo..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isLoading}
              className="w-full h-24 px-4 py-2 rounded-lg border-2 border-[var(--border)] bg-[var(--surface)] text-sm resize-none focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Tipo *</label>
              <Select value={type} onValueChange={(v) => setType(v as ContentType)} disabled={isLoading}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apostila">Apostila</SelectItem>
                  <SelectItem value="video">Vídeo</SelectItem>
                  <SelectItem value="revista">Revista</SelectItem>
                  <SelectItem value="link">Link</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Módulo *</label>
              <Select value={moduleId} onValueChange={setModuleId} disabled={isLoading}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {modules.map((module) => (
                    <SelectItem key={module.id} value={module.id.toString()}>
                      {module.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">URL / Arquivo *</label>
            <Input
              placeholder="URL ou caminho do arquivo"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">URL da Thumbnail (opcional)</label>
            <Input
              placeholder="URL da imagem de capa"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!title || !description || !moduleId || !url || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Adicionando...
              </>
            ) : success ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Adicionado!
              </>
            ) : (
              'Adicionar Conteúdo'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
