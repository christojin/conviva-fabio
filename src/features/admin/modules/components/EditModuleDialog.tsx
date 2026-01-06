"use client"

import React, { useState, useEffect } from 'react'
import { Module } from '@/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MODULE_ICONS, MODULE_COLORS } from '@/lib/constants'
import { Check, Loader2 } from 'lucide-react'

interface EditModuleDialogProps {
  module: Module | null
  onClose: () => void
  onUpdateModule: (id: number, moduleData: Partial<Module>) => void
}

export function EditModuleDialog({ module, onClose, onUpdateModule }: EditModuleDialogProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('')
  const [color, setColor] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (module) {
      setTitle(module.title)
      setDescription(module.description)
      setIcon(module.icon)
      setColor(module.color)
      setIsActive(module.isActive)
      setSuccess(false)
    }
  }, [module])

  const handleSubmit = async () => {
    if (!module || !title || !description || !icon || !color) return

    setIsLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    onUpdateModule(module.id, {
      title,
      description,
      icon,
      color,
      isActive,
    })

    setIsLoading(false)
    setSuccess(true)

    // Close after success
    setTimeout(() => {
      setSuccess(false)
      onClose()
    }, 1000)
  }

  const handleClose = () => {
    if (!isLoading) {
      setSuccess(false)
      onClose()
    }
  }

  return (
    <Dialog open={!!module} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Módulo</DialogTitle>
        </DialogHeader>
        {module && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Título do módulo *</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Descrição *</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isLoading}
                className="w-full h-24 px-4 py-2 rounded-lg border-2 border-[var(--border)] bg-[var(--surface)] text-sm resize-none focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ícone *</label>
                <Select value={icon} onValueChange={setIcon} disabled={isLoading}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {MODULE_ICONS.map((iconName) => (
                      <SelectItem key={iconName} value={iconName}>{iconName}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Cor *</label>
                <Select value={color} onValueChange={setColor} disabled={isLoading}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {MODULE_COLORS.map((colorValue) => (
                      <SelectItem key={colorValue} value={colorValue}>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded" style={{ backgroundColor: colorValue }} />
                          {colorValue}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="h-4 w-4 accent-[var(--primary)]"
                disabled={isLoading}
              />
              <label className="text-sm">Módulo ativo</label>
            </div>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!title || !description || !icon || !color || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Salvando...
              </>
            ) : success ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Salvo!
              </>
            ) : (
              'Salvar Alterações'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
