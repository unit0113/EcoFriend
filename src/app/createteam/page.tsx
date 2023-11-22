'use client'

import Image from 'next/image'
import muffin from '@/images/muffin.png'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {useSession} from 'next-auth/react';

export default function CreateTeam() {
    const {data: session, status} = useSession();
    const router = useRouter();

    // State variables for login input fields
    const [teamName, setTeam] = useState('')
    const [pw1, setPw1] = useState('')
    const [pw2, setPw2] = useState('')
    const [pwNotSame, setPwNotSame] = useState(false)

    const handleRegister = async (e: any) => {
        e.preventDefault();
        if (pw1 !== pw2) {
            setPwNotSame(true);
            return;
        }

        try {
            const res = await fetch('/api/createTeam', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: teamName,
                    password: pw1,
                    userEmail: session?.user?.email,
                }),
            });

            if (res.ok) {
                console.log('Created team', await res.json());
                router.push('/teams');
            } else {
                console.log('Error creating team. Status code:', res.status);
            }
        } catch (error) {
            console.log('Error creating team:', error);
        }
    };

    return (
        <>
            <div className="mt-12 flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Create your team
                            </h2>
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
                                            htmlFor="teamName"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Team Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={(e) => {
                                                    setTeam(e.target.value)
                                                }}
                                                id="teamName"
                                                name="teamName"
                                                type="teamName"
                                                autoComplete="teamName"
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
                                            Create Team
                                        </button>
                                    </div>
                                </form>
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
