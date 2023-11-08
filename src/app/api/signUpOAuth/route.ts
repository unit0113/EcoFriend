import { connectMongoDB } from '@/lib/mongodb'
import User from '@/models/user'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB()
    const { email } = await req.json()
    await User.create({ email: email })
    return NextResponse.json({ messsage: 'User Registered' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while registering a new user.' },
      { status: 500 },
    )
  }
}
