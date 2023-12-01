import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import muffin from '@/images/muffin.png'

function Section({
  title,
  image,
  children,
}: {
  readonly title: string
  readonly image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  readonly children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Single Player" image={{ src: muffin }}>
      <div className="space-y-6 text-base text-neutral-600"></div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Learn more
      </h3>
      <TagList className="mt-4">
        <TagListItem>Game Tips</TagListItem>
        <TagListItem>Multiplayer</TagListItem>
        <TagListItem>BeepBoop</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Multiplayer" image={{ src: muffin, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>beep boop</p>
        <p>beep boop</p>
        <p>beep boop</p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        beep boop
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Impact" image={{ src: muffin, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          beep boop{' '}
          <strong className="font-semibold text-neutral-950">
            beep boop
          </strong>{' '}
          beep boop
        </p>
        <p>beep boop</p>
        <p>
          beep boop{' '}
          <strong className="font-semibold text-neutral-950">
            beep boop
          </strong>{' '}
          beep boop
          <strong className="font-semibold text-neutral-950">
            beep boop
          </strong>{' '}
          beep boop
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        beep boop
      </h3>
      <List className="mt-8">
        <ListItem title="Beep">beep boop</ListItem>
        <ListItem title="Beep">beep boop</ListItem>
        <ListItem title="Beep">beep boop</ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow="Beeps" title="Beep">
        <p>beep boop</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">beep boop</GridListItem>
          <GridListItem title="Efficient">beep boop</GridListItem>
          <GridListItem title="Adaptable">beep boop</GridListItem>
          <GridListItem title="Honest">beep boop</GridListItem>
          <GridListItem title="Loyal">beep boop</GridListItem>
          <GridListItem title="Innovative">beep boop</GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'How to Play',
  description: 'htp.',
}

export default function Learn() {
  return (
    <>
      <PageIntro eyebrow="learn" title="How to Play">
        <p>beep boop</p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
