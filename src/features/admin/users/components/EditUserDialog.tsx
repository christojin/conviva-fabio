"use client"

import React, { useState, useEffect } from 'react'
import { User, UserRole } from '@/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Check, Loader2 } from 'lucide-react'

interface EditUserDialogProps {
  user: User | null
  onClose: () => void
  onUpdateUser: (id: number, userData: Partial<User>) => void
}

export function EditUserDialog({ user, onClose, onUpdateUser }: EditUserDialogProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<UserRole>('aluno')
  const [school, setSchool] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      setRole(user.role)
      setSchool(user.school || '')
      setIsActive(user.isActive)
      setSuccess(false)
    }
  }, [user])

  const handleSubmit = async () => {
    if (!user || !name || !email) return

    setIsLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    onUpdateUser(user.id, {
      name,
      email,
      role,
      school: school || undefined,
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
    <Dialog open={!!user} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Usuário</DialogTitle>
        </DialogHeader>
        {user && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nome completo *</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">E-mail *</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Tipo de usuário</label>
              <Select value={role} onValueChange={(v) => setRole(v as UserRole)} disabled={isLoading}>
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
              <Input
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="h-4 w-4 accent-[var(--primary)]"
                disabled={isLoading}
              />
              <label className="text-sm">Usuário ativo</label>
            </div>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!name || !email || isLoading}
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
