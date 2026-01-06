"use client"

import React from 'react'
import { Content } from '@/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { modules } from '@/data/modules'

interface EditContentDialogProps {
  content: Content | null
  onClose: () => void
}

export function EditContentDialog({ content, onClose }: EditContentDialogProps) {
  return (
    <Dialog open={!!content} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Editar Conteúdo</DialogTitle>
        </DialogHeader>
        {content && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Título</label>
              <Input defaultValue={content.title} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Descrição</label>
              <textarea
                defaultValue={content.description}
                className="w-full h-24 px-4 py-2 rounded-lg border-2 border-[var(--border)] bg-[var(--surface)] text-sm resize-none focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo</label>
                <Select defaultValue={content.type}>
                  <SelectTrigger>
                    <SelectValue />
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
                <label className="text-sm font-medium">Módulo</label>
                <Select defaultValue={content.moduleId.toString()}>
                  <SelectTrigger>
                    <SelectValue />
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
              <label className="text-sm font-medium">URL / Arquivo</label>
              <Input defaultValue={content.url} />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={content.isActive}
                className="h-4 w-4 accent-[var(--primary)]"
              />
              <label className="text-sm">Conteúdo ativo</label>
            </div>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={onClose}>
            Salvar Alterações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
