'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function DeleteUserSidebar() {
  const router = useRouter()
  const { data: session } = useSession()
  // Restrict if not signed in
  if (!session) {
    router.push('/')
  }

  const email = session?.user?.email

  const [confirmEmail, setConfirmEmail] = useState('')
  const [emailNotSame, setEmailNotSame] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (confirmEmail != email) {
      setEmailNotSame(true)
      return
    }

    try {
      const resDeleteUser = await fetch('/api/deleteUser', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (resDeleteUser) {
        signOut({ callbackUrl: 'http://localhost:3000/' })
      }
    } catch (error) {
      console.log('Error during user deletion: ', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-center text-2xl font-bold">
        Delete Account
      </header>
      <h2 className="mt-8 text-lg font-bold tracking-tight text-red-500">
        Warning: this will permanently delete your account
      </h2>
      <div className="mt-8 flex flex-1 flex-col md:flex-row">
        <aside className="w-full">
          <form
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter current email to confirm
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {emailNotSame && (
                <div className="mt-2 text-sm leading-6 text-red-500">
                  Entered email does not match
                </div>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="focus-visible:outline-grey-600 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Delete Account
              </button>
            </div>
            <button className="focus-visible:outline-grey-600 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              <Link href={'/profile'}>Cancel</Link>
            </button>
          </form>
        </aside>
      </div>
    </div>
  )
}
