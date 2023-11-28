'use client'

import TeamActivityFeed from '@/components/TeamActivityFeed'
import {HomeIcon, TrophyIcon, UsersIcon,} from '@heroicons/react/24/outline'

const navigation = [
    {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
    {name: 'Members', href: '#', icon: UsersIcon, current: false},
    {name: 'Awards', href: '#', icon: TrophyIcon, current: false},

]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const people = [
    {name: 'Beep Boop', awards: ['100% Completion'], level: '1'},
    // More people...
]
export default function Team() {
    return (
        <div className="flex min-h-full flex-col">
            <header className="shrink-0 border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                </div>
            </header>

            <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
                <aside className="sticky top-8 hidden w-44 shrink-0 lg:block">{
                    /* Left column area */
                    <nav className="flex flex-1 flex-col" aria-label="Sidebar">
                        <ul className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-50 text-black-600' : 'text-gray-700 hover:text-black-600 hover:bg-gray-50',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-black-600' : 'text-gray-400 group-hover:text-gray-600',
                                                'h-6 w-6 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                }</aside>
                <main className="flex-1">{

                    /* Main area */
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-gray-900">Team Members</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    the gang's all here
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                        <tr>
                                            <th scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                Name
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Awards
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Current Level
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                        {people.map((person) => (
                                            <tr>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    {person.name}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.awards.map((award) => (
                                                    <div>

                                                    </div>
                                                ))}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.level}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                }</main>
                <aside className="sticky top-8 hidden w-96 shrink-0 xl:block">{
                    /* Right column area */
                    <TeamActivityFeed></TeamActivityFeed>
                }</aside>
            </div>
        </div>
    )
}
