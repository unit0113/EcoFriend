import { connectMongoDB } from '@/lib/mongodb'
import User from '@/models/user'
import { NextRequest, NextResponse } from 'next/server'
import getDefaultUsername from '@/app/api/getDefaultUsername'

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB()
    const { email } = await req.json()

    // Get default username from provided email
    const username = getDefaultUsername(email)

    // Create new user
    await User.create({ email: email, username: username })

    return NextResponse.json({ messsage: 'User Registered' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while registering a new user.' },
      { status: 500 },
    )
  }
}
