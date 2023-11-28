import { NextRequest, NextResponse } from 'next/server'
import { connectMongoDB } from '@/lib/mongodb'
import User from '@/models/user'

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB()
    const { email } = await req.json()
    const user = await User.findOne({ email })

    return NextResponse.json(
      { message: 'User data retrieved', user: user },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while retrieving user data.' },
      { status: 500 },
    )
  }
}
