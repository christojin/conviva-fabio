"use client"

import React from 'react'
import { User } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ROLE_LABELS } from '@/lib/constants'
import { getInitials, formatDateShort } from '@/lib/utils'
import { Edit, Trash2, Check, X, Users } from 'lucide-react'
import { EmptyState } from '@/components/shared'

interface UsersTableProps {
  users: User[]
  onEditUser: (user: User) => void
  onDeleteUser?: (user: User) => void
}

export function UsersTable({ users, onEditUser, onDeleteUser }: UsersTableProps) {
  if (users.length === 0) {
    return (
      <Card>
        <CardContent className="p-0">
          <EmptyState icon={Users} message="Nenhum usuário encontrado" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)]">Usuário</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)]">Tipo</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)] hidden md:table-cell">Escola</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)] hidden lg:table-cell">Cadastro</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)]">Status</th>
                <th className="text-right p-4 text-sm font-medium text-[var(--text-muted)]">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-[var(--border)] hover:bg-[var(--surface-hover)]">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">{user.name}</p>
                        <p className="text-sm text-[var(--text-muted)]">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant="outline">{ROLE_LABELS[user.role]}</Badge>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <span className="text-sm text-[var(--text-secondary)]">
                      {user.school || '-'}
                    </span>
                  </td>
                  <td className="p-4 hidden lg:table-cell">
                    <span className="text-sm text-[var(--text-muted)]">
                      {formatDateShort(user.createdAt)}
                    </span>
                  </td>
                  <td className="p-4">
                    {user.isActive ? (
                      <Badge variant="success" className="bg-[var(--success-light)] text-[var(--success)]">
                        <Check className="h-3 w-3 mr-1" />
                        Ativo
                      </Badge>
                    ) : (
                      <Badge variant="error" className="bg-[var(--error-light)] text-[var(--error)]">
                        <X className="h-3 w-3 mr-1" />
                        Inativo
                      </Badge>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEditUser(user)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-[var(--error)]"
                        onClick={() => onDeleteUser?.(user)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
