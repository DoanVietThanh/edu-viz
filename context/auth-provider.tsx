'use client'

import { getCurrentUser } from '@/actions/user/get-who-am-i'
import { User } from '@prisma/client'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

export type AuthContextType = {
  user: User | null
  isLoadingAuth: boolean
}

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
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
        isLoadingAuth
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
