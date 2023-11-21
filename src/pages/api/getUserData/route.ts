import { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '@/lib/mongodb'
import User from '@/models/user'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongoDB()
    const { email } = await req.body()
    console.log(email)
    const user = await User.findOne({ email })

    res.status(201).json({ message: 'User data retrieved', user: user })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'An error occured while retrieving user data.' })
  }
}
