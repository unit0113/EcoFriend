'use client'

import Image from 'next/image'
import muffin from '@/images/muffin.png'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

export default function signUp() {
  const router = useRouter()

  // Restrict if already signed in
  const { data: session } = useSession()
  if (session) {
    router.push('/game')
  }

  // State variables for register input fields
  const [email, setEmail] = useState('')
  const [pw1, setPw1] = useState('')
  const [pw2, setPw2] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [pwSucksError, setPwSucksError] = useState(false)
  const [pwNotSame, setPwNotSame] = useState(false)
  const [accountExists, setAccountExists] = useState(false)

  const handleRegister = async (e: any) => {
    e.preventDefault()
    if (pw1 != pw2) {
      setPwNotSame(true)
      return
    }
    try {
      // Check if account already exists
      const resUserExists = await fetch('/api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const { user } = await resUserExists.json()

      if (user) {
        setAccountExists(true)
        return
      }

      // Attempt to register new account
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pw1 }),
      })

      if (res.ok) {
        const loginRes = await signIn('credentials', {
          email,
          password: pw1,
          redirect: false,
        })
        if (loginRes && loginRes.ok) {
          router.push('/game')
        }
      } else {
        console.log('User registration failed')
      }
    } catch (error) {
      console.log('Error during registration: ', error)
    }
  }

  return (
    <>
      <div className="mt-12 flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Already have an account?{' '}
                <Link
                  className="hover:text-grey-900 font-bold text-black"
                  href={'/login'}
                >
                  Log in
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form
                  onSubmit={handleRegister}
                  action="#"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setAccountExists(false)
                        }}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {emailError && (
                      <div className="mt-2 text-sm leading-6 text-red-500">
                        Invalid Email
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => setPw1(e.target.value)}
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
                      Re-Enter Password
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => {
                          setPw2(e.target.value)
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
                      Create Account
                    </button>
                  </div>
                  {accountExists && (
                    <div className="mt-2 text-sm leading-6 text-red-500">
                      An account with these credentials already exists
                    </div>
                  )}
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or create account with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button
                    onClick={() =>
                      signIn('google', {
                        callbackUrl: 'http://localhost:3000/game',
                      })
                    }
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg  bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 "
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                    </svg>
                    Google
                  </button>

                  <button
                    onClick={() =>
                      signIn('github', {
                        callbackUrl: 'http://localhost:3000/game',
                      })
                    }
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg  bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={muffin}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
