'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

import { SERVER_URL } from '@/constants/env-config'

export type TSendMessage = { receiverId: string; senderId: string; type: 'Text' | 'Image' | 'Video' } & (
  | {
      type: 'Text'
      content: string
    }
  | {
      type: 'Image'
      image: string
    }
  | {
      type: 'Video'
      video: string
    }
)

type SocketProviderProps = {
  children: React.ReactNode
  clerkId: string
}

type SocketContextType = {
  socket: Socket | null
}

export const SocketContext = createContext<SocketContextType | null>(null)

const SocketProvider = ({ children, clerkId }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null)

  //connect socket
  useEffect(() => {
    const socketIo = io(SERVER_URL)

    setSocket(socketIo)

    function cleanup() {
      socketIo.disconnect()
    }

    return cleanup
  }, [])

  //join room
  useEffect(() => {
    const joinRoom = () => {
      if (socket) {
        socket.emit('joinRoom', clerkId)
      }
    }

    if (socket) {
      joinRoom()
    }
  }, [socket, clerkId])

  //leave room
  useEffect(() => {
    const leaveRoom = () => {
      if (socket) {
        socket.emit('leaveRoom', clerkId)
      }
    }

    window.addEventListener('beforeunload', leaveRoom)

    return () => {
      window.removeEventListener('beforeunload', leaveRoom)
    }
  }, [socket, clerkId])

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}

export default SocketProvider

export const useSocket = () => {
  const context = useContext(SocketContext)
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider')
  }
  return context
}
