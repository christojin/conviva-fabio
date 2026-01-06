"use client"

import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ROLE_LABELS } from '@/lib/constants'
import { getInitials, formatDateTime } from '@/lib/utils'
import { getActivitiesByUser } from '@/data/activity'
import {
  User, Mail, School, Calendar, Clock, Shield, Bell,
  Eye, Download, CheckCircle2, LogIn, Edit, Save, Camera
} from 'lucide-react'

const activityIcons: Record<string, React.ElementType> = {
  view: Eye,
  download: Download,
  complete: CheckCircle2,
  login: LogIn,
}

export default function PerfilPage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    school: user?.school || '',
  })

  const userActivities = user ? getActivitiesByUser(user.id) : []

  const handleSave = () => {
    // In a real app, this would save to the backend
    setIsEditing(false)
  }

  if (!user) return null

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
          <User className="h-7 w-7 text-[var(--primary)]" />
          Meu Perfil
        </h1>
        <p className="text-[var(--text-secondary)] mt-1">
          Gerencie suas informações pessoais e preferências
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile card */}
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-2xl">
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 p-2 rounded-full bg-[var(--primary)] text-white shadow-lg hover:bg-[var(--primary-dark)] transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">
                {user.name}
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">{user.email}</p>

              <Badge className="mt-2" style={{ backgroundColor: 'var(--primary)' }}>
                {ROLE_LABELS[user.role]}
              </Badge>

              {user.school && (
                <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <School className="h-4 w-4" />
                  {user.school}
                </div>
              )}

              {user.class && (
                <p className="text-sm text-[var(--text-muted)]">
                  Turma: {user.class}
                </p>
              )}

              <div className="mt-6 pt-6 border-t border-[var(--border)] w-full space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--text-muted)] flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Membro desde
                  </span>
                  <span className="text-[var(--text-primary)]">
                    {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--text-muted)] flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Último acesso
                  </span>
                  <span className="text-[var(--text-primary)]">
                    {formatDateTime(user.lastAccess)}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="info" className="w-full">
            <TabsList>
              <TabsTrigger value="info">
                <User className="h-4 w-4 mr-2" />
                Informações
              </TabsTrigger>
              <TabsTrigger value="security">
                <Shield className="h-4 w-4 mr-2" />
                Segurança
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="h-4 w-4 mr-2" />
                Notificações
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Informações Pessoais</CardTitle>
                  {!isEditing ? (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </Button>
                  ) : (
                    <Button size="sm" onClick={handleSave}>
                      <Save className="h-4 w-4 mr-2" />
                      Salvar
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">
                      Nome completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">
                      E-mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
                      <Input
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">
                      Escola/Instituição
                    </label>
                    <div className="relative">
                      <School className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
                      <Input
                        value={formData.school}
                        onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Segurança da Conta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">
                      Senha atual
                    </label>
                    <Input type="password" placeholder="••••••••" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">
                      Nova senha
                    </label>
                    <Input type="password" placeholder="••••••••" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">
                      Confirmar nova senha
                    </label>
                    <Input type="password" placeholder="••••••••" />
                  </div>

                  <Button className="mt-4">
                    Alterar Senha
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Preferências de Notificação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Novos conteúdos</p>
                      <p className="text-sm text-[var(--text-muted)]">Receba alertas quando novos materiais forem adicionados</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 accent-[var(--primary)]" />
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Lembretes de estudo</p>
                      <p className="text-sm text-[var(--text-muted)]">Receba lembretes para continuar seus estudos</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 accent-[var(--primary)]" />
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Atualizações do sistema</p>
                      <p className="text-sm text-[var(--text-muted)]">Receba informações sobre novidades da plataforma</p>
                    </div>
                    <input type="checkbox" className="h-5 w-5 accent-[var(--primary)]" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Recent activity */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Atividades</CardTitle>
            </CardHeader>
            <CardContent>
              {userActivities.length > 0 ? (
                <div className="space-y-4">
                  {userActivities.slice(0, 5).map((activity) => {
                    const Icon = activityIcons[activity.type] || Eye
                    return (
                      <div key={activity.id} className="flex items-center gap-3 py-2">
                        <div className="p-2 rounded-lg bg-[var(--muted)]">
                          <Icon className="h-4 w-4 text-[var(--text-muted)]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-[var(--text-primary)]">
                            {activity.description}
                            {activity.contentTitle && (
                              <span className="font-medium"> "{activity.contentTitle}"</span>
                            )}
                          </p>
                          <p className="text-xs text-[var(--text-muted)]">
                            {formatDateTime(activity.timestamp)}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <p className="text-center py-8 text-[var(--text-muted)]">
                  Nenhuma atividade registrada ainda
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
