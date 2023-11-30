'use client'

import { useSession } from 'next-auth/react'
import { Button } from '@/components/Button'
import { ProfileButton } from './ProfileButton'

export function LoginBtnHeader() {
  const { data: session } = useSession()

  if (session) {
    return <ProfileButton></ProfileButton>
  }
  return <Button href="/login">Log in</Button>
}
