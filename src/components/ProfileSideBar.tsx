'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function ProfileSideBar() {
  // Restrict if not signed in
  const router = useRouter()
  const { data: session } = useSession()
  if (!session) {
    router.push('/')
  }

  const menuItems = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/achievements',
      title: 'Achievements',
    },
    {
      href: '/viewGameState',
      title: 'Game Stats',
    },
    {
      href: '/profile/changeUsername',
      title: 'Change Username',
    },
    {
      href: '/profile/changePassword',
      title: 'Change Password',
    },
    {
      href: '/profile/deleteUser',
      title: 'Delete Account',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-center text-2xl font-bold">
        Profile
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="w-full">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li
                  className="h-10 px-8 text-xl font-bold tracking-tight hover:bg-neutral-200"
                  key={title}
                >
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  )
}
