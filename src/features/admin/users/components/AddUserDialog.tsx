"use client"

import React, { useState } from 'react'
import { UserRole } from '@/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Check, Loader2 } from 'lucide-react'

interface AddUserDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddUser: (userData: {
    name: string
    email: string
    password: string
    role: UserRole
    school?: string
    avatar: string
    isActive: boolean
  }) => void
}

export function AddUserDialog({ open, onOpenChange, onAddUser }: AddUserDialogProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<UserRole>('aluno')
  const [school, setSchool] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!name || !email || !password) return

    setIsLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    onAddUser({
      name,
      email,
      password,
      role,
      school: school || undefined,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
      isActive: true,
    })

    setIsLoading(false)
    setSuccess(true)

    // Reset form and close after success
    setTimeout(() => {
      setName('')
      setEmail('')
      setPassword('')
      setRole('aluno')
      setSchool('')
      setSuccess(false)
      onOpenChange(false)
    }, 1000)
  }

  const handleClose = () => {
    if (!isLoading) {
      setName('')
      setEmail('')
      setPassword('')
      setRole('aluno')
      setSchool('')
      setSuccess(false)
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Novo Usuário</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nome completo *</label>
            <Input
              placeholder="Nome do usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">E-mail *</label>
            <Input
              type="email"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Senha *</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Tipo de usuário</label>
            <Select value={role} onValueChange={(v) => setRole(v as UserRole)} disabled={isLoading}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
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
              placeholder="Nome da escola"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
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
            disabled={!name || !email || !password || isLoading}
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
              'Adicionar Usuário'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
