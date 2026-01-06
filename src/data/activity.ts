import { Activity, AdminStats, ModuleProgress, ChartDataPoint } from '@/types'

export const activities: Activity[] = [
  {
    id: 1,
    userId: 2,
    userName: 'João Santos',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    type: 'complete',
    contentTitle: 'Conhecendo Minhas Emoções',
    contentType: 'apostila',
    description: 'completou a apostila',
    timestamp: '2024-12-11T14:30:00Z'
  },
  {
    id: 2,
    userId: 7,
    userName: 'Beatriz Costa',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    type: 'view',
    contentTitle: 'Diário das Emoções',
    contentType: 'video',
    description: 'assistiu ao vídeo',
    timestamp: '2024-12-11T13:45:00Z'
  },
  {
    id: 3,
    userId: 4,
    userName: 'Pedro Oliveira',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    type: 'download',
    contentTitle: 'Revista CONVIVA+ - Edição 1',
    contentType: 'revista',
    description: 'baixou a revista',
    timestamp: '2024-12-11T12:20:00Z'
  },
  {
    id: 4,
    userId: 6,
    userName: 'Lucas Ferreira',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    type: 'view',
    contentTitle: 'Respiração e Calma',
    contentType: 'video',
    description: 'assistiu ao vídeo',
    timestamp: '2024-12-11T11:15:00Z'
  },
  {
    id: 5,
    userId: 11,
    userName: 'Juliana Rocha',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    type: 'complete',
    contentTitle: 'O Que é Empatia?',
    contentType: 'apostila',
    description: 'completou a apostila',
    timestamp: '2024-12-11T10:30:00Z'
  },
  {
    id: 6,
    userId: 1,
    userName: 'Maria Silva',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    type: 'login',
    description: 'acessou a plataforma',
    timestamp: '2024-12-11T09:00:00Z'
  },
  {
    id: 7,
    userId: 2,
    userName: 'João Santos',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    type: 'download',
    contentTitle: 'Controlando a Raiva',
    contentType: 'apostila',
    description: 'baixou a apostila',
    timestamp: '2024-12-10T16:45:00Z'
  },
  {
    id: 8,
    userId: 5,
    userName: 'Carla Mendes',
    userAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    type: 'view',
    contentTitle: 'Trabalho em Equipe',
    contentType: 'video',
    description: 'assistiu ao vídeo',
    timestamp: '2024-12-10T15:30:00Z'
  },
  {
    id: 9,
    userId: 9,
    userName: 'Fernanda Lima',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    type: 'complete',
    contentTitle: 'Comunicação Assertiva',
    contentType: 'apostila',
    description: 'completou a apostila',
    timestamp: '2024-12-10T14:20:00Z'
  },
  {
    id: 10,
    userId: 4,
    userName: 'Pedro Oliveira',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    type: 'view',
    contentTitle: 'Meditação para Crianças',
    contentType: 'video',
    description: 'assistiu ao vídeo',
    timestamp: '2024-12-10T11:00:00Z'
  }
]

export const adminStats: AdminStats = {
  totalUsers: 12,
  activeUsers: 11,
  totalContent: 20,
  totalViews: 25678,
  totalDownloads: 9870,
  usersGrowth: 15.3,
  viewsGrowth: 23.7,
  downloadsGrowth: 18.2
}

export const userModuleProgress: ModuleProgress[] = [
  {
    moduleId: 1,
    moduleTitle: 'Autoconhecimento',
    progress: 75,
    completedItems: 9,
    totalItems: 12
  },
  {
    moduleId: 2,
    moduleTitle: 'Empatia e Relacionamentos',
    progress: 30,
    completedItems: 3,
    totalItems: 10
  },
  {
    moduleId: 3,
    moduleTitle: 'Tomada de Decisão',
    progress: 0,
    completedItems: 0,
    totalItems: 8
  },
  {
    moduleId: 4,
    moduleTitle: 'Gestão de Emoções',
    progress: 50,
    completedItems: 7,
    totalItems: 15
  },
  {
    moduleId: 5,
    moduleTitle: 'Habilidades Sociais',
    progress: 10,
    completedItems: 1,
    totalItems: 11
  }
]

export const weeklyAccessData: ChartDataPoint[] = [
  { label: 'Seg', value: 245 },
  { label: 'Ter', value: 312 },
  { label: 'Qua', value: 287 },
  { label: 'Qui', value: 356 },
  { label: 'Sex', value: 298 },
  { label: 'Sáb', value: 124 },
  { label: 'Dom', value: 89 }
]

export const monthlyAccessData: ChartDataPoint[] = [
  { label: 'Jan', value: 4520 },
  { label: 'Fev', value: 5230 },
  { label: 'Mar', value: 4890 },
  { label: 'Abr', value: 6120 },
  { label: 'Mai', value: 5780 },
  { label: 'Jun', value: 6450 },
  { label: 'Jul', value: 5920 },
  { label: 'Ago', value: 7230 },
  { label: 'Set', value: 6890 },
  { label: 'Out', value: 7560 },
  { label: 'Nov', value: 8120 },
  { label: 'Dez', value: 4250 }
]

export const contentTypeDistribution: ChartDataPoint[] = [
  { label: 'Apostilas', value: 8 },
  { label: 'Vídeos', value: 6 },
  { label: 'Revistas', value: 3 },
  { label: 'Links', value: 3 }
]

export const userRoleDistribution: ChartDataPoint[] = [
  { label: 'Alunos', value: 7 },
  { label: 'Professores', value: 4 },
  { label: 'Instrutores', value: 2 }
]

export function getRecentActivities(limit: number = 10): Activity[] {
  return [...activities]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit)
}

export function getActivitiesByUser(userId: number): Activity[] {
  return activities.filter(activity => activity.userId === userId)
}
