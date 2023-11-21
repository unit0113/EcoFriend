'use client'

import Image from 'next/image'
import React from 'react'
import accountIcon from '@/images/account_icon.png'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import { Button } from './Button'

export function ProfileButton() {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Image
          src={accountIcon}
          alt="Google login"
          width={60}
          height={60}
          layout="intrinsic"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="session" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{session?.user?.email}</p>
        </DropdownItem>
        <DropdownItem key="achievements">
          <Button
            className="w-full"
            onClick={() => console.log('Achievements')}
          >
            Achievements
          </Button>
        </DropdownItem>
        <DropdownItem key="team">
          <Button
            className="w-full"
            href="/teams"
            onClick={() => console.log('Team')}
          >
            Team
          </Button>
        </DropdownItem>
        <DropdownItem key="profile">
          <Button className="w-full" onClick={() => router.push('/profile')}>
            Profile
          </Button>
        </DropdownItem>
        <DropdownItem key="signOut">
          <Button
            onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
          >
            Sign out
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
