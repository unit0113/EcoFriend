'use client'

import { signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'

export function LoginBtnHeader() {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    return (
      <>
        <Button
          onClick={() =>
            signOut({ redirect: false }).then(() => {
              router.push('/')
            })
          }
        >
          Sign out
        </Button>
      </>
    )
  }
  return (
    <>
      <Button href="/login">Log in</Button>
    </>
  )
}
