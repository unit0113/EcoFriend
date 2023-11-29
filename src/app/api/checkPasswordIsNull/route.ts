import { NextRequest, NextResponse } from 'next/server'
import { connectMongoDB } from '@/lib/mongodb'
import User from '@/models/user'

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB()
    const { email } = await req.json()

    // Find user with provided email
    const user = await User.findOne({ email })

    if (user.password == null) {
      return NextResponse.json({ message: 'Password is null' }, { status: 201 })
    }
    return NextResponse.json(
      { message: 'Password is not null' },
      { status: 500 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while updating user password.' },
      { status: 500 },
    )
  }
}
