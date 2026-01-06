// Role labels in Portuguese
export const ROLE_LABELS: Record<string, string> = {
  professor: 'Professor(a)',
  aluno: 'Aluno(a)',
  instrutor: 'Instrutor(a)'
}

// Content type labels
export const CONTENT_TYPE_LABELS: Record<string, string> = {
  apostila: 'Apostila',
  video: 'Vídeo',
  revista: 'Revista Digital',
  link: 'Link de Apoio'
}

// Content type icons
export const CONTENT_TYPE_ICONS: Record<string, string> = {
  apostila: 'FileText',
  video: 'Play',
  revista: 'BookOpen',
  link: 'ExternalLink'
}

// Content type colors
export const CONTENT_TYPE_COLORS: Record<string, string> = {
  apostila: '#FF6B35',
  video: '#2EC4B6',
  revista: '#FFBE0B',
  link: '#3B82F6'
}

// Activity type labels
export const ACTIVITY_TYPE_LABELS: Record<string, string> = {
  view: 'visualizou',
  download: 'baixou',
  complete: 'completou',
  login: 'acessou a plataforma',
  comment: 'comentou em'
}

// Navigation items for dashboard
export const DASHBOARD_NAV_ITEMS = [
  { label: 'Início', href: '/dashboard', icon: 'Home' },
  { label: 'Módulos', href: '/dashboard/modulos', icon: 'Layers' },
  { label: 'Apostilas', href: '/dashboard/apostilas', icon: 'FileText' },
  { label: 'Vídeos', href: '/dashboard/videos', icon: 'Play' },
  { label: 'Revistas', href: '/dashboard/revistas', icon: 'BookOpen' },
  { label: 'Links de Apoio', href: '/dashboard/links', icon: 'ExternalLink' },
  { label: 'QR Codes', href: '/dashboard/qrcode', icon: 'QrCode' },
]

// Navigation items for admin
export const ADMIN_NAV_ITEMS = [
  { label: 'Dashboard', href: '/admin', icon: 'LayoutDashboard' },
  { label: 'Usuários', href: '/admin/usuarios', icon: 'Users' },
  { label: 'Conteúdos', href: '/admin/conteudos', icon: 'FolderOpen' },
  { label: 'Módulos', href: '/admin/modulos', icon: 'Layers' },
  { label: 'Relatórios', href: '/admin/relatorios', icon: 'BarChart3' },
]

// Module icons available for selection
export const MODULE_ICONS = [
  'Heart', 'Users', 'Compass', 'Brain', 'MessageCircle',
  'Star', 'Smile', 'HandHeart', 'Lightbulb', 'Target',
  'Sparkles', 'Shield', 'Flame', 'Leaf', 'Sun'
]

// Module colors available for selection
export const MODULE_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
  '#FF6B35', '#2EC4B6', '#FFBE0B', '#E74C3C', '#9B59B6'
]

// Socio-emotional competencies (for context)
export const COMPETENCIES = [
  { id: 1, name: 'Autoconhecimento', description: 'Reconhecer suas próprias emoções e pensamentos' },
  { id: 2, name: 'Autorregulação', description: 'Gerenciar emoções e comportamentos' },
  { id: 3, name: 'Consciência Social', description: 'Compreender perspectivas dos outros' },
  { id: 4, name: 'Habilidades de Relacionamento', description: 'Estabelecer e manter relacionamentos saudáveis' },
  { id: 5, name: 'Tomada de Decisão Responsável', description: 'Fazer escolhas construtivas' },
]

// Placeholder images
export const PLACEHOLDER_IMAGES = {
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  module: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
  content: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
  hero: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop',
  education: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
}

// Video placeholder (YouTube educational video)
export const PLACEHOLDER_VIDEO = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

// PDF placeholder (sample PDF URL)
export const PLACEHOLDER_PDF = '/sample.pdf'

// App metadata
export const APP_NAME = 'CONVIVA+'
export const APP_DESCRIPTION = 'Plataforma de Educação Socioemocional'
export const APP_TAGLINE = 'Desenvolvendo competências socioemocionais para a vida'

// Contact info (for landing page)
export const CONTACT_INFO = {
  email: 'contato@convivamais.edu.br',
  phone: '(11) 99999-9999',
  whatsapp: '5511999999999',
  address: 'São Paulo, SP - Brasil',
}

// Social links
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/convivamais',
  facebook: 'https://facebook.com/convivamais',
  youtube: 'https://youtube.com/@convivamais',
  linkedin: 'https://linkedin.com/company/convivamais',
}
