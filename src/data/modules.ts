import { Module } from '@/types'

export const modules: Module[] = [
  {
    id: 1,
    title: 'Autoconhecimento',
    description: 'Desenvolva a consciência sobre suas emoções, pensamentos e comportamentos. Aprenda a reconhecer seus pontos fortes e áreas de desenvolvimento.',
    icon: 'Heart',
    color: '#FF6B6B',
    order: 1,
    totalItems: 12,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    title: 'Empatia e Relacionamentos',
    description: 'Aprenda a se conectar com os outros de forma significativa. Desenvolva habilidades para compreender diferentes perspectivas e construir relacionamentos saudáveis.',
    icon: 'Users',
    color: '#4ECDC4',
    order: 2,
    totalItems: 10,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    title: 'Tomada de Decisão',
    description: 'Desenvolva habilidades para fazer escolhas conscientes e responsáveis. Aprenda a avaliar consequências e tomar decisões éticas.',
    icon: 'Compass',
    color: '#45B7D1',
    order: 3,
    totalItems: 8,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    title: 'Gestão de Emoções',
    description: 'Aprenda técnicas para lidar com suas emoções de forma saudável. Desenvolva estratégias para gerenciar o estresse e a ansiedade.',
    icon: 'Brain',
    color: '#96CEB4',
    order: 4,
    totalItems: 15,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    title: 'Habilidades Sociais',
    description: 'Melhore sua comunicação e interação social. Aprenda a trabalhar em equipe, resolver conflitos e se comunicar de forma assertiva.',
    icon: 'MessageCircle',
    color: '#FFEAA7',
    order: 5,
    totalItems: 11,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  }
]

export function getModuleById(id: number): Module | undefined {
  return modules.find(module => module.id === id)
}

export function getActiveModules(): Module[] {
  return modules.filter(module => module.isActive).sort((a, b) => a.order - b.order)
}
