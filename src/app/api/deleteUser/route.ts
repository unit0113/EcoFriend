import { NextRequest, NextResponse } from 'next/server'
import { connectMongoDB } from '@/lib/mongodb'
import User from '@/models/user'

export async function DELETE(req: NextRequest) {
  try {
    await connectMongoDB()
    const { email } = await req.json()
    const userId = await User.findOne({ email }).select('_id')
    await User.deleteOne(userId)

    return NextResponse.json({ message: 'User deleted' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while deleting the user.' },
      { status: 500 },
    )
  }
}
