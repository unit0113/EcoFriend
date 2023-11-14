import { NextRequest, NextResponse } from 'next/server'
import { connectMongoDB } from '@/lib/mongodb'
import Team from '@/models/team'
import User from '@/models/user'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB()
    const { name, password, userEmail } = await req.json()
    const team = await Team.findOne({ name })

    if (!team) {
      return NextResponse.json({ message: 'Team not found' }, { status: 400 })
    }

    const passwordsMatch = await bcrypt.compare(password, team.password)
    if (!passwordsMatch) {
      return NextResponse.json(
        { message: 'Invalid team password' },
        { status: 403 },
      )
    }

    if (team.members.length >= 4) {
      return NextResponse.json({ message: 'Team is full' }, { status: 401 })
    }

    const user = await User.findOne({ userEmail })
    await team.updateOne({ $push: { members: user._id } })
    await user.updateOne({ team_id: team._id })

    return NextResponse.json({ message: 'Team Joined' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while joining a team.' },
      { status: 500 },
    )
  }
}
