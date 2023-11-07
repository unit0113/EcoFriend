'use client'

import { SessionProvider } from 'next-auth/react'

interface IProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: IProps) => {
  return <SessionProvider>{children}</SessionProvider>
}
