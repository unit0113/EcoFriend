import {type Metadata} from 'next'
import Image from 'next/image'

import {Border} from '@/components/Border'
import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import {PageIntro} from '@/components/PageIntro'
import {PageLinks} from '@/components/PageLinks'

import {loadArticles} from '@/lib/mdx'
import muffin from '@/images/muffin.png'
import lily from '@/images/us/lily.jpg'
import ed from '@/images/us/ed.jpg'


const team = [
    {
        title: 'Team',
        people: [
            {
                name: 'Lily',
                role: 'Lead Unity Developer',
                image: lily,
            },
            {
                name: 'Kyle',
                role: 'Scrum Master',
                image: muffin,
            },
            {
                name: 'Christian',
                role: 'Project Manager',
                image: muffin,
            },
            {
                name: 'Ed',
                role: 'Lead Web Developer',
                image: ed,
            },
            // ...
        ],
    },
]

function Team() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <div className="space-y-24">
                {team.map((group) => (
                    <FadeInStagger key={group.title}>
                        <Border as={FadeIn}/>
                        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                            <FadeIn>
                                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                    {group.title}
                                </h2>
                            </FadeIn>
                            <div className="lg:col-span-3">
                                <ul
                                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                                >
                                    {group.people.map((person) => (
                                        <li key={person.name}>
                                            <FadeIn>
                                                <div
                                                    className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                                    <Image
                                                        src={person.image}
                                                        alt=""
                                                        className="h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                                                    />
                                                    <div
                                                        className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                                        <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                            {person.name}
                                                        </p>
                                                        <p className="mt-2 text-sm text-white">
                                                            {person.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeInStagger>
                ))}
            </div>
        </Container>
    )
}

export const metadata: Metadata = {
    title: 'About Us',
    description: 'beep boop'
}

export default async function About() {
    let blogArticles = (await loadArticles()).slice(0, 2)

    return (
        <>
            <PageIntro eyebrow="About us" title="Our strength is collaboration">
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        Join us in making sustainability not just a concept, but a global lifestyle. "EcoFriend" isn't
                        just about playing a game; it's about playing a crucial part in shaping a brighter, greener
                        future for our planet.
                    </p>
                </div>
            </PageIntro>
            <Team/>
            <PageLinks
                className="mt-24 sm:mt-32 lg:mt-40"
                title="From the blog"
                intro="Save the world."
                pages={blogArticles}
            />
            <ContactSection/>
        </>
    )
}