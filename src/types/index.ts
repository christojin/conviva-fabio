// User types
export type UserRole = 'professor' | 'aluno' | 'instrutor'

export interface User {
  id: number
  name: string
  email: string
  password: string
  role: UserRole
  avatar: string
  school?: string
  class?: string
  createdAt: string
  lastAccess: string
  isActive: boolean
}

// Module types
export interface Module {
  id: number
  title: string
  description: string
  icon: string
  color: string
  order: number
  totalItems: number
  isActive: boolean
  createdAt: string
}

// Content types
export type ContentType = 'apostila' | 'video' | 'revista' | 'link'

export interface Content {
  id: number
  title: string
  description: string
  type: ContentType
  moduleId: number
  url: string
  thumbnail?: string
  fileSize?: string
  duration?: string
  author?: string
  publishedAt: string
  views: number
  downloads: number
  isActive: boolean
}

// Progress types
export interface UserProgress {
  id: number
  oduleId: number
  contentId: number
  completed: boolean
  progress: number
  lastAccess: string
}

// Activity types
export type ActivityType = 'view' | 'download' | 'complete' | 'login' | 'comment'

export interface Activity {
  id: number
  userId: number
  userName: string
  userAvatar: string
  type: ActivityType
  contentTitle?: string
  contentType?: ContentType
  description: string
  timestamp: string
}

// Stats types
export interface AdminStats {
  totalUsers: number
  activeUsers: number
  totalContent: number
  totalViews: number
  totalDownloads: number
  usersGrowth: number
  viewsGrowth: number
  downloadsGrowth: number
}

export interface ModuleProgress {
  moduleId: number
  moduleTitle: string
  progress: number
  completedItems: number
  totalItems: number
}

// Chart data types
export interface ChartDataPoint {
  label: string
  value: number
}

// Notification types
export interface Notification {
  id: number
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  timestamp: string
}

// QR Code types
export interface QRCodeData {
  id: string
  title: string
  url: string
  createdAt: string
  scans: number
}

// Form types
export interface LoginFormData {
  email: string
  password: string
}

export interface UserFormData {
  name: string
  email: string
  password: string
  role: UserRole
  school?: string
  class?: string
}

export interface ContentFormData {
  title: string
  description: string
  type: ContentType
  moduleId: number
  url: string
  thumbnail?: string
}

export interface ModuleFormData {
  title: string
  description: string
  icon: string
  color: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination types
export interface PaginationParams {
  page: number
  limit: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Filter types
export interface ContentFilters {
  type?: ContentType
  moduleId?: number
  search?: string
}

export interface UserFilters {
  role?: UserRole
  isActive?: boolean
  search?: string
}
