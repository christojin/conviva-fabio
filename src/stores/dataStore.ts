"use client"

import { User, Content, Module } from '@/types'
import { users as initialUsers } from '@/data/users'
import { contents as initialContents } from '@/data/content'
import { modules as initialModules } from '@/data/modules'

// Simple state management for demo CRUD operations
class DataStore {
  private users: User[] = [...initialUsers]
  private contents: Content[] = [...initialContents]
  private modules: Module[] = [...initialModules]
  private listeners: Set<() => void> = new Set()

  // Subscribe to changes
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  private notify() {
    this.listeners.forEach(listener => listener())
  }

  // Users CRUD
  getUsers(): User[] {
    return [...this.users]
  }

  getUserById(id: number): User | undefined {
    return this.users.find(u => u.id === id)
  }

  addUser(userData: Omit<User, 'id' | 'createdAt' | 'lastAccess'>): User {
    const newUser: User = {
      ...userData,
      id: Math.max(...this.users.map(u => u.id)) + 1,
      createdAt: new Date().toISOString(),
      lastAccess: new Date().toISOString(),
    }
    this.users = [...this.users, newUser]
    this.notify()
    return newUser
  }

  updateUser(id: number, userData: Partial<User>): User | null {
    const index = this.users.findIndex(u => u.id === id)
    if (index === -1) return null

    this.users[index] = { ...this.users[index], ...userData }
    this.users = [...this.users]
    this.notify()
    return this.users[index]
  }

  deleteUser(id: number): boolean {
    const initialLength = this.users.length
    this.users = this.users.filter(u => u.id !== id)
    if (this.users.length !== initialLength) {
      this.notify()
      return true
    }
    return false
  }

  // Contents CRUD
  getContents(): Content[] {
    return [...this.contents]
  }

  getContentById(id: number): Content | undefined {
    return this.contents.find(c => c.id === id)
  }

  getContentByModule(moduleId: number): Content[] {
    return this.contents.filter(c => c.moduleId === moduleId && c.isActive)
  }

  getContentByType(type: string): Content[] {
    return this.contents.filter(c => c.type === type && c.isActive)
  }

  addContent(contentData: Omit<Content, 'id' | 'publishedAt' | 'views' | 'downloads'>): Content {
    const newContent: Content = {
      ...contentData,
      id: Math.max(...this.contents.map(c => c.id)) + 1,
      publishedAt: new Date().toISOString(),
      views: 0,
      downloads: 0,
    }
    this.contents = [...this.contents, newContent]
    this.notify()
    return newContent
  }

  updateContent(id: number, contentData: Partial<Content>): Content | null {
    const index = this.contents.findIndex(c => c.id === id)
    if (index === -1) return null

    this.contents[index] = { ...this.contents[index], ...contentData }
    this.contents = [...this.contents]
    this.notify()
    return this.contents[index]
  }

  deleteContent(id: number): boolean {
    const initialLength = this.contents.length
    this.contents = this.contents.filter(c => c.id !== id)
    if (this.contents.length !== initialLength) {
      this.notify()
      return true
    }
    return false
  }

  incrementContentViews(id: number): void {
    const content = this.contents.find(c => c.id === id)
    if (content) {
      content.views += 1
      this.contents = [...this.contents]
      this.notify()
    }
  }

  incrementContentDownloads(id: number): void {
    const content = this.contents.find(c => c.id === id)
    if (content) {
      content.downloads += 1
      this.contents = [...this.contents]
      this.notify()
    }
  }

  // Modules CRUD
  getModules(): Module[] {
    return [...this.modules]
  }

  getModuleById(id: number): Module | undefined {
    return this.modules.find(m => m.id === id)
  }

  addModule(moduleData: Omit<Module, 'id' | 'createdAt' | 'totalItems'>): Module {
    const newModule: Module = {
      ...moduleData,
      id: Math.max(...this.modules.map(m => m.id)) + 1,
      createdAt: new Date().toISOString(),
      totalItems: 0,
    }
    this.modules = [...this.modules, newModule]
    this.notify()
    return newModule
  }

  updateModule(id: number, moduleData: Partial<Module>): Module | null {
    const index = this.modules.findIndex(m => m.id === id)
    if (index === -1) return null

    this.modules[index] = { ...this.modules[index], ...moduleData }
    this.modules = [...this.modules]
    this.notify()
    return this.modules[index]
  }

  deleteModule(id: number): boolean {
    const initialLength = this.modules.length
    this.modules = this.modules.filter(m => m.id !== id)
    if (this.modules.length !== initialLength) {
      this.notify()
      return true
    }
    return false
  }

  reorderModules(moduleIds: number[]): void {
    const reordered = moduleIds
      .map((id, index) => {
        const module = this.modules.find(m => m.id === id)
        if (module) {
          return { ...module, order: index + 1 }
        }
        return null
      })
      .filter((m): m is Module => m !== null)

    this.modules = reordered
    this.notify()
  }
}

// Singleton instance
export const dataStore = new DataStore()
