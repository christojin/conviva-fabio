import { User } from '@/types'

export const users: User[] = [
  {
    id: 1,
    name: 'Maria Silva',
    email: 'maria@escola.com',
    password: '123456',
    role: 'professor',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    school: 'Escola Municipal São Paulo',
    class: '5º Ano A',
    createdAt: '2024-01-15T10:00:00Z',
    lastAccess: '2024-12-10T14:30:00Z',
    isActive: true
  },
  {
    id: 2,
    name: 'João Santos',
    email: 'joao@aluno.com',
    password: '123456',
    role: 'aluno',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    school: 'Escola Municipal São Paulo',
    class: '5º Ano A',
    createdAt: '2024-02-01T08:00:00Z',
    lastAccess: '2024-12-11T09:15:00Z',
    isActive: true
  },
  {
    id: 3,
    name: 'Ana Coordenadora',
    email: 'ana@admin.com',
    password: '123456',
    role: 'instrutor',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    school: 'Secretaria de Educação',
    createdAt: '2024-01-01T08:00:00Z',
    lastAccess: '2024-12-12T08:00:00Z',
    isActive: true
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    email: 'pedro@aluno.com',
    password: '123456',
    role: 'aluno',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    school: 'Escola Municipal São Paulo',
    class: '5º Ano B',
    createdAt: '2024-02-05T08:00:00Z',
    lastAccess: '2024-12-10T16:45:00Z',
    isActive: true
  },
  {
    id: 5,
    name: 'Carla Mendes',
    email: 'carla@professor.com',
    password: '123456',
    role: 'professor',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    school: 'Escola Estadual Rio de Janeiro',
    class: '6º Ano A',
    createdAt: '2024-01-20T10:00:00Z',
    lastAccess: '2024-12-09T11:20:00Z',
    isActive: true
  },
  {
    id: 6,
    name: 'Lucas Ferreira',
    email: 'lucas@aluno.com',
    password: '123456',
    role: 'aluno',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    school: 'Escola Estadual Rio de Janeiro',
    class: '6º Ano A',
    createdAt: '2024-03-01T08:00:00Z',
    lastAccess: '2024-12-11T14:00:00Z',
    isActive: true
  },
  {
    id: 7,
    name: 'Beatriz Costa',
    email: 'beatriz@aluno.com',
    password: '123456',
    role: 'aluno',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    school: 'Escola Municipal São Paulo',
    class: '5º Ano A',
    createdAt: '2024-02-10T08:00:00Z',
    lastAccess: '2024-12-10T10:30:00Z',
    isActive: true
  },
  {
    id: 8,
    name: 'Ricardo Almeida',
    email: 'ricardo@instrutor.com',
    password: '123456',
    role: 'instrutor',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    school: 'Secretaria de Educação',
    createdAt: '2024-01-05T08:00:00Z',
    lastAccess: '2024-12-11T16:00:00Z',
    isActive: true
  },
  {
    id: 9,
    name: 'Fernanda Lima',
    email: 'fernanda@professor.com',
    password: '123456',
    role: 'professor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    school: 'Escola Municipal Belo Horizonte',
    class: '4º Ano A',
    createdAt: '2024-02-15T10:00:00Z',
    lastAccess: '2024-12-08T09:00:00Z',
    isActive: true
  },
  {
    id: 10,
    name: 'Gabriel Souza',
    email: 'gabriel@aluno.com',
    password: '123456',
    role: 'aluno',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop',
    school: 'Escola Municipal Belo Horizonte',
    class: '4º Ano A',
    createdAt: '2024-03-05T08:00:00Z',
    lastAccess: '2024-12-11T11:45:00Z',
    isActive: false
  },
  {
    id: 11,
    name: 'Juliana Rocha',
    email: 'juliana@aluno.com',
    password: '123456',
    role: 'aluno',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    school: 'Escola Municipal São Paulo',
    class: '5º Ano B',
    createdAt: '2024-02-20T08:00:00Z',
    lastAccess: '2024-12-10T15:20:00Z',
    isActive: true
  },
  {
    id: 12,
    name: 'Thiago Martins',
    email: 'thiago@professor.com',
    password: '123456',
    role: 'professor',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop',
    school: 'Escola Estadual Rio de Janeiro',
    class: '7º Ano A',
    createdAt: '2024-01-25T10:00:00Z',
    lastAccess: '2024-12-09T14:00:00Z',
    isActive: true
  }
]

export function getUserByEmail(email: string): User | undefined {
  return users.find(user => user.email === email)
}

export function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id)
}

export function getUsersByRole(role: string): User[] {
  return users.filter(user => user.role === role)
}

export function getActiveUsers(): User[] {
  return users.filter(user => user.isActive)
}
