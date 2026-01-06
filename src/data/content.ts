import { Content } from '@/types'

export const contents: Content[] = [
  // Module 1 - Autoconhecimento
  {
    id: 1,
    title: 'Conhecendo Minhas Emoções',
    description: 'Apostila introdutória sobre identificação e reconhecimento das emoções básicas.',
    type: 'apostila',
    moduleId: 1,
    url: '/materials/apostila-emocoes.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    fileSize: '2.5 MB',
    author: 'Equipe CONVIVA+',
    publishedAt: '2024-01-15T10:00:00Z',
    views: 1250,
    downloads: 890,
    isActive: true
  },
  {
    id: 2,
    title: 'Diário das Emoções',
    description: 'Vídeo explicativo sobre como manter um diário emocional e seus benefícios.',
    type: 'video',
    moduleId: 1,
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    duration: '12:45',
    author: 'Prof. Maria Silva',
    publishedAt: '2024-01-20T14:00:00Z',
    views: 2340,
    downloads: 0,
    isActive: true
  },
  {
    id: 3,
    title: 'Revista CONVIVA+ - Edição 1',
    description: 'Primeira edição da revista digital com atividades sobre autoconhecimento.',
    type: 'revista',
    moduleId: 1,
    url: '/materials/revista-ed1.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop',
    fileSize: '8.2 MB',
    author: 'Equipe Editorial',
    publishedAt: '2024-02-01T10:00:00Z',
    views: 1890,
    downloads: 1200,
    isActive: true
  },
  {
    id: 4,
    title: 'Portal do Autoconhecimento',
    description: 'Site externo com recursos adicionais sobre autoconhecimento infantil.',
    type: 'link',
    moduleId: 1,
    url: 'https://example.com/autoconhecimento',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
    author: 'Recursos Externos',
    publishedAt: '2024-01-10T10:00:00Z',
    views: 650,
    downloads: 0,
    isActive: true
  },

  // Module 2 - Empatia e Relacionamentos
  {
    id: 5,
    title: 'O Que é Empatia?',
    description: 'Apostila completa sobre o conceito de empatia e como desenvolvê-la.',
    type: 'apostila',
    moduleId: 2,
    url: '/materials/apostila-empatia.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
    fileSize: '3.1 MB',
    author: 'Equipe CONVIVA+',
    publishedAt: '2024-02-10T10:00:00Z',
    views: 980,
    downloads: 720,
    isActive: true
  },
  {
    id: 6,
    title: 'Histórias de Empatia',
    description: 'Vídeo com histórias inspiradoras sobre empatia no dia a dia.',
    type: 'video',
    moduleId: 2,
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=300&fit=crop',
    duration: '18:30',
    author: 'Prof. Carla Mendes',
    publishedAt: '2024-02-15T14:00:00Z',
    views: 1560,
    downloads: 0,
    isActive: true
  },
  {
    id: 7,
    title: 'Construindo Amizades',
    description: 'Material sobre como construir e manter amizades saudáveis.',
    type: 'apostila',
    moduleId: 2,
    url: '/materials/apostila-amizades.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop',
    fileSize: '2.8 MB',
    author: 'Equipe CONVIVA+',
    publishedAt: '2024-02-20T10:00:00Z',
    views: 870,
    downloads: 650,
    isActive: true
  },

  // Module 3 - Tomada de Decisão
  {
    id: 8,
    title: 'Pensando Antes de Agir',
    description: 'Apostila sobre o processo de tomada de decisão consciente.',
    type: 'apostila',
    moduleId: 3,
    url: '/materials/apostila-decisao.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    fileSize: '2.2 MB',
    author: 'Equipe CONVIVA+',
    publishedAt: '2024-03-01T10:00:00Z',
    views: 720,
    downloads: 540,
    isActive: true
  },
  {
    id: 9,
    title: 'Consequências das Escolhas',
    description: 'Vídeo interativo sobre como nossas escolhas afetam nossa vida.',
    type: 'video',
    moduleId: 3,
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    duration: '15:20',
    author: 'Prof. Ricardo Almeida',
    publishedAt: '2024-03-05T14:00:00Z',
    views: 1120,
    downloads: 0,
    isActive: true
  },
  {
    id: 10,
    title: 'Revista CONVIVA+ - Edição 2',
    description: 'Segunda edição com foco em tomada de decisão responsável.',
    type: 'revista',
    moduleId: 3,
    url: '/materials/revista-ed2.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
    fileSize: '7.8 MB',
    author: 'Equipe Editorial',
    publishedAt: '2024-03-10T10:00:00Z',
    views: 1340,
    downloads: 980,
    isActive: true
  },

  // Module 4 - Gestão de Emoções
  {
    id: 11,
    title: 'Controlando a Raiva',
    description: 'Técnicas práticas para lidar com a raiva de forma saudável.',
    type: 'apostila',
    moduleId: 4,
    url: '/materials/apostila-raiva.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    fileSize: '2.9 MB',
    author: 'Equipe CONVIVA+',
    publishedAt: '2024-03-15T10:00:00Z',
    views: 1650,
    downloads: 1280,
    isActive: true
  },
  {
    id: 12,
    title: 'Respiração e Calma',
    description: 'Vídeo guiado de técnicas de respiração para momentos de ansiedade.',
    type: 'video',
    moduleId: 4,
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
    duration: '10:15',
    author: 'Prof. Fernanda Lima',
    publishedAt: '2024-03-20T14:00:00Z',
    views: 2890,
    downloads: 0,
    isActive: true
  },
  {
    id: 13,
    title: 'Lidando com a Tristeza',
    description: 'Material sobre como processar e lidar com sentimentos de tristeza.',
    type: 'apostila',
    moduleId: 4,
    url: '/materials/apostila-tristeza.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1515191107209-c28698631303?w=400&h=300&fit=crop',
    fileSize: '2.4 MB',
    author: 'Equipe CONVIVA+',
    publishedAt: '2024-03-25T10:00:00Z',
    views: 1120,
    downloads: 890,
    isActive: true
  },
  {
    id: 14,
    title: 'Meditação para Crianças',
    description: 'Vídeo de meditação guiada adaptada para crianças.',
    type: 'video',
    moduleId: 4,
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=300&fit=crop',
    duration: '8:45',
    author: 'Prof. Ana Coordenadora',
    publishedAt: '2024-04-01T14:00:00Z',
    views: 3450,
    downloads: 0,
    isActive: true
  },
  {
    id: 15,
    title: 'Apps de Bem-Estar',
    description: 'Lista de aplicativos recomendados para gestão emocional.',
    type: 'link',
    moduleId: 4,
    url: 'https://example.com/apps-bem-estar',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    author: 'Recursos Externos',
    publishedAt: '2024-04-05T10:00:00Z',
    views: 890,
    downloads: 0,
    isActive: true
  },

  // Module 5 - Habilidades Sociais
  {
    id: 16,
    title: 'Comunicação Assertiva',
    description: 'Apostila sobre como se comunicar de forma clara e respeitosa.',
    type: 'apostila',
    moduleId: 5,
    url: '/materials/apostila-comunicacao.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
    fileSize: '3.2 MB',
    author: 'Equipe CONVIVA+',
    publishedAt: '2024-04-10T10:00:00Z',
    views: 1230,
    downloads: 920,
    isActive: true
  },
  {
    id: 17,
    title: 'Trabalho em Equipe',
    description: 'Vídeo sobre a importância e técnicas de trabalho colaborativo.',
    type: 'video',
    moduleId: 5,
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    duration: '14:50',
    author: 'Prof. Thiago Martins',
    publishedAt: '2024-04-15T14:00:00Z',
    views: 1680,
    downloads: 0,
    isActive: true
  },
  {
    id: 18,
    title: 'Resolvendo Conflitos',
    description: 'Material sobre técnicas de resolução pacífica de conflitos.',
    type: 'apostila',
    moduleId: 5,
    url: '/materials/apostila-conflitos.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop',
    fileSize: '2.6 MB',
    author: 'Equipe CONVIVA+',
    publishedAt: '2024-04-20T10:00:00Z',
    views: 980,
    downloads: 750,
    isActive: true
  },
  {
    id: 19,
    title: 'Revista CONVIVA+ - Edição 3',
    description: 'Terceira edição focada em habilidades sociais e comunicação.',
    type: 'revista',
    moduleId: 5,
    url: '/materials/revista-ed3.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    fileSize: '9.1 MB',
    author: 'Equipe Editorial',
    publishedAt: '2024-04-25T10:00:00Z',
    views: 1450,
    downloads: 1100,
    isActive: true
  },
  {
    id: 20,
    title: 'Jogos Cooperativos',
    description: 'Link para plataforma de jogos cooperativos online.',
    type: 'link',
    moduleId: 5,
    url: 'https://example.com/jogos-cooperativos',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541f7f2f80?w=400&h=300&fit=crop',
    author: 'Recursos Externos',
    publishedAt: '2024-05-01T10:00:00Z',
    views: 2100,
    downloads: 0,
    isActive: true
  }
]

export function getContentById(id: number): Content | undefined {
  return contents.find(content => content.id === id)
}

export function getContentByModule(moduleId: number): Content[] {
  return contents.filter(content => content.moduleId === moduleId && content.isActive)
}

export function getContentByType(type: string): Content[] {
  return contents.filter(content => content.type === type && content.isActive)
}

export function getActiveContents(): Content[] {
  return contents.filter(content => content.isActive)
}

export function searchContents(query: string): Content[] {
  const lowerQuery = query.toLowerCase()
  return contents.filter(content =>
    content.isActive && (
      content.title.toLowerCase().includes(lowerQuery) ||
      content.description.toLowerCase().includes(lowerQuery)
    )
  )
}
