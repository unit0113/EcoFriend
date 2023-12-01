import { type Metadata } from 'next'
import { RootLayout } from '@/components/RootLayout'
import '@/styles/tailwind.css'
import { AuthProvider } from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s - EcoFriend Studios',
    default: 'Making Sustainability Fun',
  },
}

export default function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <AuthProvider>
          <RootLayout>{children}</RootLayout>
        </AuthProvider>
      </body>
    </html>
  )
}
