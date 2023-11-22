import NextAuth from 'next-auth/next'
import {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'
import {connectMongoDB} from '@/lib/mongodb'
import User from '@/models/user'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials

        try {
          await connectMongoDB()
          const user = await User.findOne({ email })

          if (!user) {
            return null
          }

          const passwordsMatch = await bcrypt.compare(password, user.password)

          if (!passwordsMatch) {
            return null
          }

          return user
        } catch (error) {
          console.log('Error: ', error)
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/login' },
  callbacks: {

      async signIn({ user, account }) {
      if (account?.provider === 'google' || account?.provider === 'github') {
        try {
          await connectMongoDB()
          const { email } = user
          const userExists = await User.findOne({ email })

          if (!userExists) {
            const res = await fetch('http://localhost:3000/api/signUpOAuth', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
            })
            if (res.ok) {
              return true
            }
          }
        } catch (error) {
          console.log('Error signing in with OAuth Provider')
        }
      }
      return true
    },
  },
}

const handler = NextAuth(authOptions)
export default handler
export { handler as GET, handler as POST }
