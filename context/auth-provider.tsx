'use client'

import { getCurrentUser } from '@/actions/user/get-who-am-i'
import { User } from '@prisma/client'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

type UserWithRole = User & { role: { id: string; roleName: string } }

export type AuthContextType = {
  user: UserWithRole | null
  isLoadingAuth: boolean
  role?: string
}

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [currentUser, setCurrentUser] = useState<UserWithRole | null>(null)
  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const response = await getCurrentUser()
        console.log('🚀 ~ fetchCurrentUser ~ response:', response)
        if (response) {
          setCurrentUser(response)
          setIsLoadingAuth(false)
        }
      } catch (error: any) {
        toast.error(error.message)
      }
    }
    fetchCurrentUser()
  }, [])
  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        isLoadingAuth,
        role: currentUser?.role?.roleName
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
