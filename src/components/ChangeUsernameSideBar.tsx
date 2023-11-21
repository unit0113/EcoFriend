'use client'

import { useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const fetchMap = new Map<string, Promise<any>>()

function queryClient<QueryResult>(
  username: string,
  query: () => Promise<QueryResult>,
): Promise<QueryResult> {
  if (!fetchMap.has(username)) {
    fetchMap.set(username, query())
  }
  return fetchMap.get(username)!
}

export default function ChangeUsernameSidebar() {
  const router = useRouter()
  const { data: session } = useSession()
  // Restrict if not signed in
  if (!session || !session.user || !session.user.email) {
    router.push('/')
    return
  }

  const email = session.user.email

  //Retrieve username
  //https://www.youtube.com/watch?v=zwQs4wXr9Bg&t=531s
  const userData = use(
    queryClient('user', () =>
      fetch('/api/getUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }).then((res) => res.json()),
    ),
  )
  const username = userData.user.username

  const [newUsername, setnewUsername] = useState('')
  const [usernameTaken, setUsernameTaken] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const resUpdatePassword = await fetch('/api/changeUsername', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newUsername }),
      })

      if (resUpdatePassword) {
        fetchMap.clear()
        router.push('/profile')
      }
    } catch (error) {
      console.log('Error during username update: ', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-center text-2xl font-bold">
        Change Username
      </header>
      <h2 className="mt-8 text-lg font-bold leading-9 tracking-tight text-gray-900">
        Current Username: {username}
      </h2>
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
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                New Username
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setnewUsername(e.target.value)
                    setUsernameTaken(false)
                  }}
                  id="username"
                  name="username"
                  type="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {usernameTaken && (
                <div className="mt-2 text-sm leading-6 text-red-500">
                  Username already taken
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="focus-visible:outline-grey-600 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Update Username
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
