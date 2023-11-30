import Image from 'next/image'
import run from '@/images/run.jpg'
import { FadeIn } from '@/components/FadeIn'
import Link from 'next/link'

export default function Hero() {
  return (
    <FadeIn className="lg:order-last">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Gamified Climate Change
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Designed with passion, knowledge, and the future in mind, EcoFriend
            seamlessly marries education with entertainment, offering players of
            all ages an immersive journey into sustainability and environmental
            awareness.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/game"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Play Now
            </Link>
            <Link
              href="/learn"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={run}
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
