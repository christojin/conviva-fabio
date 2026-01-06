"use client"

import React, { useState } from 'react'
import { User } from '@/types'
import { useUsers } from '@/hooks/useDataStore'
import { StatsBadge } from '@/components/shared'
import { UsersHeader } from './UsersHeader'
import { UsersFilters } from './UsersFilters'
import { UsersTable } from './UsersTable'
import { AddUserDialog } from './AddUserDialog'
import { EditUserDialog } from './EditUserDialog'

export function UsersPageContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const { users, addUser, updateUser, deleteUser } = useUsers()

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = roleFilter === 'all' || user.role === roleFilter
    const matchesStatus = statusFilter === 'all' ||
      (statusFilter === 'active' ? user.isActive : !user.isActive)
    return matchesSearch && matchesRole && matchesStatus
  })

  const handleAddUser = (userData: Parameters<typeof addUser>[0]) => {
    addUser(userData)
  }

  const handleUpdateUser = (id: number, userData: Partial<User>) => {
    updateUser(id, userData)
  }

  const handleDeleteUser = (user: User) => {
    if (confirm(`Tem certeza que deseja excluir o usuário "${user.name}"?`)) {
      deleteUser(user.id)
    }
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <UsersHeader onAddUser={() => setIsAddDialogOpen(true)} />

      <UsersFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        roleFilter={roleFilter}
        onRoleFilterChange={setRoleFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      <div className="flex gap-4 flex-wrap">
        <StatsBadge label={`${filteredUsers.length} usuários encontrados`} color="primary" />
        <StatsBadge label={`${filteredUsers.filter(u => u.isActive).length} ativos`} color="success" />
      </div>

      <UsersTable
        users={filteredUsers}
        onEditUser={setSelectedUser}
        onDeleteUser={handleDeleteUser}
      />

      <AddUserDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAddUser={handleAddUser}
      />

      <EditUserDialog
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
        onUpdateUser={handleUpdateUser}
      />
    </div>
  )
}
