import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Hero from '@/components/Hero'
import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import {List, ListItem} from '@/components/List'
import {SectionIntro} from '@/components/SectionIntro'
import {StylizedImage} from '@/components/StylizedImage'
import {Testimonial} from '@/components/Testimonial'
import muffin from '@/images/muffin.png'
import run from '@/images/run.jpg'
import {type Article, loadArticles, type MDXEntry} from '@/lib/mdx'

function Articles({articles}: { articles: Array<MDXEntry<Article>> }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <FadeIn key={article.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={article.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={article.logo}
                      alt={article.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={article.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {article.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Article</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {article.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {article.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Multiplayer() {
  return (
    <>
      <SectionIntro
        eyebrow="Teams"
        title="Team up with your friends."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
          <p>Team up to track your friends sustainability score.</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                  src={muffin}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
              <ListItem title="Create Team">Create a team page</ListItem>
            <ListItem title="Set Password">
                Set a team password that only you and your friends know
            </ListItem>
            <ListItem title="Add friends">
                Add friends and track your sustainability scores.
            </ListItem>
              <ListItem title="Win Prizes">
                  Win prizes when your team contributes the highest sustainability
                  score for the year!
              </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let articles = (await loadArticles()).slice(0, 3)

  return (
    <>
        <Hero/>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Making Sustainability Fun.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
              In this immersive game, you'll embark on a journey to a vibrant,
              eco-conscious world filled with challenges, discoveries, and endless
              opportunities to make a positive impact on the environment.
          </p>
        </FadeIn>
      </Container>

      <Articles articles={articles} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mom', logo: run }}
      >
          From the moment I played EcoFriend, I was captivated by its immersive
          world. The graphics are stunning, and the attention to detail in
          creating eco-conscious landscapes is commendable. It's evident that the
          developers put a lot of thought into making the game visually appealing
          while staying true to its environmental message.
      </Testimonial>

      <Multiplayer />

      <ContactSection />
    </>
  )
}
