import { NextRequest, NextResponse } from 'next/server'
import { connectMongoDB } from '@/lib/mongodb'
import Team from '@/models/team'
import User from '@/models/user'

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB()
    const { userEmail } = await req.json()
    const user = await User.findOne({ email: userEmail })
    const team = await Team.findOne({ _id: user.team_id })

    if (!team) {
      return NextResponse.json(
        { message: 'User is not a member of a team' },
        { status: 400 },
      )
    }

    const users: any[] = []
    team.members.forEach((member: string) => {
      const memberData = User.findOne({ _id: member })
      users.push(memberData)
    })

    return NextResponse.json(
      { message: 'Team members found', userData: users },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occured while retrieving team member data' },
      { status: 500 },
    )
  }
}
