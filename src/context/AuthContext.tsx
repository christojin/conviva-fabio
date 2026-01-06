"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '@/types'
import { getUserByEmail } from '@/data/users'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved user in localStorage on mount
    const savedUser = localStorage.getItem('conviva_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch {
        localStorage.removeItem('conviva_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    const foundUser = getUserByEmail(email)

    if (!foundUser) {
      setIsLoading(false)
      return { success: false, error: 'Usuário não encontrado' }
    }

    if (foundUser.password !== password) {
      setIsLoading(false)
      return { success: false, error: 'Senha incorreta' }
    }

    if (!foundUser.isActive) {
      setIsLoading(false)
      return { success: false, error: 'Usuário inativo. Entre em contato com o administrador.' }
    }

    // Save user to state and localStorage
    setUser(foundUser)
    localStorage.setItem('conviva_user', JSON.stringify(foundUser))
    setIsLoading(false)

    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('conviva_user')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
