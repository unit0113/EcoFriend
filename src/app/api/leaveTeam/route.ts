import { NextRequest, NextResponse } from 'next/server'
import { connectMongoDB } from '@/lib/mongodb'
import Team from '@/models/team'
import User from '@/models/user'

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB()
    const { userEmail } = await req.json()

    // Find user from provided email and team that user is member of
    const user = await User.findOne({ email: userEmail })
    const team = await Team.findOne({ _id: user.team_id })

    if (!team) {
      return NextResponse.json({ message: 'Team not found' }, { status: 400 })
    }

    // Remove user from team members, reset user team to null
    await team.updateOne({ $pull: { members: user._id } })
    await user.updateOne({ team_id: null })

    // If team is now empty, delete
    if (team.members.length == 0) {
      await Team.deleteOne(team._id)
    }

    return NextResponse.json({ message: 'Removed from team' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while leaving a team.' },
      { status: 500 },
    )
  }
}
