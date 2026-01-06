"use client"

import { useState, useEffect, useCallback } from 'react'
import { dataStore } from '@/stores/dataStore'
import { User, Content, Module } from '@/types'

export function useUsers() {
  const [users, setUsers] = useState<User[]>(dataStore.getUsers())

  useEffect(() => {
    return dataStore.subscribe(() => {
      setUsers(dataStore.getUsers())
    })
  }, [])

  const addUser = useCallback((userData: Omit<User, 'id' | 'createdAt' | 'lastAccess'>) => {
    return dataStore.addUser(userData)
  }, [])

  const updateUser = useCallback((id: number, userData: Partial<User>) => {
    return dataStore.updateUser(id, userData)
  }, [])

  const deleteUser = useCallback((id: number) => {
    return dataStore.deleteUser(id)
  }, [])

  return { users, addUser, updateUser, deleteUser }
}

export function useContents() {
  const [contents, setContents] = useState<Content[]>(dataStore.getContents())

  useEffect(() => {
    return dataStore.subscribe(() => {
      setContents(dataStore.getContents())
    })
  }, [])

  const addContent = useCallback((contentData: Omit<Content, 'id' | 'publishedAt' | 'views' | 'downloads'>) => {
    return dataStore.addContent(contentData)
  }, [])

  const updateContent = useCallback((id: number, contentData: Partial<Content>) => {
    return dataStore.updateContent(id, contentData)
  }, [])

  const deleteContent = useCallback((id: number) => {
    return dataStore.deleteContent(id)
  }, [])

  const incrementViews = useCallback((id: number) => {
    dataStore.incrementContentViews(id)
  }, [])

  const incrementDownloads = useCallback((id: number) => {
    dataStore.incrementContentDownloads(id)
  }, [])

  const getByType = useCallback((type: string) => {
    return contents.filter(c => c.type === type && c.isActive)
  }, [contents])

  const getByModule = useCallback((moduleId: number) => {
    return contents.filter(c => c.moduleId === moduleId && c.isActive)
  }, [contents])

  return {
    contents,
    addContent,
    updateContent,
    deleteContent,
    incrementViews,
    incrementDownloads,
    getByType,
    getByModule
  }
}

export function useModules() {
  const [modules, setModules] = useState<Module[]>(dataStore.getModules())

  useEffect(() => {
    return dataStore.subscribe(() => {
      setModules(dataStore.getModules())
    })
  }, [])

  const addModule = useCallback((moduleData: Omit<Module, 'id' | 'createdAt' | 'totalItems'>) => {
    return dataStore.addModule(moduleData)
  }, [])

  const updateModule = useCallback((id: number, moduleData: Partial<Module>) => {
    return dataStore.updateModule(id, moduleData)
  }, [])

  const deleteModule = useCallback((id: number) => {
    return dataStore.deleteModule(id)
  }, [])

  const reorderModules = useCallback((moduleIds: number[]) => {
    dataStore.reorderModules(moduleIds)
  }, [])

  return { modules, addModule, updateModule, deleteModule, reorderModules }
}
