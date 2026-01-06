"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MODULE_ICONS, MODULE_COLORS } from '@/lib/constants'
import { Check, Loader2 } from 'lucide-react'

interface AddModuleDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  modulesCount: number
  onAddModule: (moduleData: {
    title: string
    description: string
    icon: string
    color: string
    order: number
    isActive: boolean
  }) => void
}

export function AddModuleDialog({ open, onOpenChange, modulesCount, onAddModule }: AddModuleDialogProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('')
  const [color, setColor] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!title || !description || !icon || !color) return

    setIsLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    onAddModule({
      title,
      description,
      icon,
      color,
      order: modulesCount + 1,
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
    setIcon('')
    setColor('')
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Novo Módulo</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Título do módulo *</label>
            <Input
              placeholder="Ex: Autoconhecimento"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Descrição *</label>
            <textarea
              placeholder="Descreva o objetivo do módulo..."
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
                  <SelectValue placeholder="Selecione" />
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
                  <SelectValue placeholder="Selecione" />
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
        </div>
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
                Criando...
              </>
            ) : success ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Criado!
              </>
            ) : (
              'Criar Módulo'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
