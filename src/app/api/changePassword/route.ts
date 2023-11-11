import { NextRequest, NextResponse } from 'next/server'
import { connectMongoDB } from '@/lib/mongodb'
import User from '@/models/user'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB()
    const { email, newPW1 } = await req.json()
    const user = await User.findOne({ email }).select('_id')
    const hashedPassword = await bcrypt.hash(newPW1, 10)
    await user?.updateOne({
      password: hashedPassword,
    })

    return NextResponse.json({ message: 'Password updated' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while updating user password.' },
      { status: 500 },
    )
  }
}
