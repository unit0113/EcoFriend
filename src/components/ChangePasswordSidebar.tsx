'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function ChangePasswordSidebar() {
  const router = useRouter()
  const { data: session } = useSession()

  // Restrict if not signed in
  useEffect(() => {
    if (!session?.user?.email) {
      router.push('/')
    }
  }, [session])

  const email = session?.user?.email

  // Initialize state variables
  const [oldPW, setOldPW] = useState('')
  const [newPW1, setNewPW1] = useState('')
  const [newPW2, setNewPW2] = useState('')
  const [currentPWFail, setCurrentPWFail] = useState(false)
  const [pwNotSame, setPwNotSame] = useState(false)
  const [hasPassword, setHasPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user has a password
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        cache: 'no-store',
      })
      const userData = await res.json()
      setHasPassword(userData?.user?.password != null)
      setIsLoading(false)
    }
    fetchData()
  }, [hasPassword])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (hasPassword) {
      // Check current password
      try {
        const resUserPasswordMatch = await fetch('/api/checkPassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, oldPW }),
        })

        // Current password must match stored
        if (!resUserPasswordMatch.ok) {
          setCurrentPWFail(true)
          return
        }
      } catch (error) {
        console.log('Error during password comparision: ', error)
      }
    }

    // Passwords must match
    if (newPW1 != newPW2) {
      setPwNotSame(true)
      return
    }

    // Attempt to change password
    try {
      const resUpdatePassword = await fetch('/api/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPW1 }),
      })

      // If successful, redirect to profile page
      if (resUpdatePassword) {
        router.push('/profile')
      }
    } catch (error) {
      console.log('Error during password update: ', error)
    }
  }
  // Force page to check if user has password prior to loading either change password or add password versions
  if (isLoading) {
    return
  }
  return (
    <div className="flex min-h-screen flex-col">
      {hasPassword && (
        <header className="sticky top-0 flex h-16 items-center justify-center text-2xl font-bold">
          Change Password
        </header>
      )}
      {!hasPassword && (
        <header className="sticky top-0 flex h-16 items-center justify-center text-2xl font-bold">
          Add New Password
        </header>
      )}
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="w-full">
          <form
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="space-y-6"
          >
            {hasPassword && (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Current Password
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => {
                      setOldPW(e.target.value)
                      setCurrentPWFail(false)
                    }}
                    id="oldPassword"
                    name="oldPassword"
                    type="password"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {currentPWFail && (
                  <div className="mt-2 text-sm leading-6 text-red-500">
                    Entered password does not match current password
                  </div>
                )}
              </div>
            )}

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
