'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function AddPasswordSideBar() {
  const router = useRouter()
  const { data: session } = useSession()
  // Restrict if not signed in
  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  })

  const email = session?.user?.email

  const [newPW1, setNewPW1] = useState('')
  const [newPW2, setNewPW2] = useState('')
  const [pwSucksError, setPwSucksError] = useState(false)
  const [pwNotSame, setPwNotSame] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (newPW1 != newPW2) {
      setPwNotSame(true)
      return
    }

    try {
      const resUpdatePassword = await fetch('/api/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPW1 }),
      })

      useEffect(() => {
        if (resUpdatePassword) {
          router.push('/profile')
        }
      })
    } catch (error) {
      console.log('Error during password update: ', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-center text-2xl font-bold">
        Add New Password
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
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
                New Password
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewPW1(e.target.value)}
                  id="password1"
                  name="password1"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {pwSucksError && (
                <div className="mt-2 text-sm leading-6 text-red-500">
                  Password must suck less
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Re-Enter New Password
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setNewPW2(e.target.value)
                    setPwNotSame(false)
                  }}
                  id="password2"
                  name="password2"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {pwNotSame && (
                <div className="mt-2 text-sm leading-6 text-red-500">
                  Passwords must match
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="focus-visible:outline-grey-600 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Update Password
              </button>
            </div>
          </form>
          <div className="mt-8 text-lg font-bold leading-9 tracking-tight text-gray-900">
            <form>
              <button className="focus-visible:outline-grey-600 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                <Link href={'/profile'}>Cancel</Link>
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  )
}
