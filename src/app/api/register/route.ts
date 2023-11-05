import { NextRequest, NextResponse } from 'next/server'
import { connectMongoDB } from '@/lib/mongodb'
import User from '@/models/user'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const { email, pw1 } = await req.json()
    const hashedPassword = await bcrypt.hash(pw1, 10)
    await connectMongoDB()
    await User.create({ email, password: hashedPassword })

    return NextResponse.json(
      { message: 'New user registered' },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while registering a new user.' },
      { status: 500 },
    )
  }
}
