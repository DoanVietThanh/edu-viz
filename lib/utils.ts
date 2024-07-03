import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type BaseError = {
  statusCode: number
  message: string
}

export function isBaseError(error: unknown): error is BaseError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'statusCode' in error &&
    typeof (error as BaseError).statusCode === 'number' &&
    'message' in error &&
    typeof (error as BaseError).message === 'string'
  )
}

export async function eduVizFetch<T>(input: string | URL | Request, init?: RequestInit | undefined) {
  const res = await fetch(input, init)

  if (res.ok) {
    if (res.status !== 400) return undefined

    const data = await res.json()
    return data as T
  } else {
    const error = await res.json()
    throw error
  }
}

export function formatMessageTime(timestamp: number): string {
  const now = new Date()
  const date = new Date(timestamp)

  const isToday = now.toDateString() === date.toDateString()

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }

  if (isToday) {
    return date.toLocaleTimeString('en-US', options)
  } else {
    options.day = '2-digit'
    options.month = 'long'
    options.year = 'numeric'
    return date.toLocaleDateString('en-US', options)
  }
}
