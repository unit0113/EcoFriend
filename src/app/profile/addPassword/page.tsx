import Image from 'next/image'
import happy_groot from '@/images/happy_groot.png'
import AddPasswordSidebar from '@/components/AddPasswordSidebar'

export default function addPassword() {
  return (
    <>
      <div className="mt-12 flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <AddPasswordSidebar></AddPasswordSidebar>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={happy_groot}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
