"use client"

import React from 'react'
import { User } from '@/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface EditUserDialogProps {
  user: User | null
  onClose: () => void
}

export function EditUserDialog({ user, onClose }: EditUserDialogProps) {
  return (
    <Dialog open={!!user} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Usuário</DialogTitle>
        </DialogHeader>
        {user && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nome completo</label>
              <Input defaultValue={user.name} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">E-mail</label>
              <Input type="email" defaultValue={user.email} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Tipo de usuário</label>
              <Select defaultValue={user.role}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aluno">Aluno(a)</SelectItem>
                  <SelectItem value="professor">Professor(a)</SelectItem>
                  <SelectItem value="instrutor">Instrutor(a)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Escola/Instituição</label>
              <Input defaultValue={user.school} />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={user.isActive}
                className="h-4 w-4 accent-[var(--primary)]"
              />
              <label className="text-sm">Usuário ativo</label>
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
