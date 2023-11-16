import {NextRequest, NextResponse} from 'next/server'
import {connectMongoDB} from '@/lib/mongodb'
import Team from '@/models/team'
import User from '@/models/user'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB()
    const { name, password, userEmail } = await req.json()
    const existingTeam = await Team.findOne({ name })
    if (existingTeam) {
      return NextResponse.json(
        { message: 'Team name already exists' },
        { status: 401 },
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.findOne({ userEmail })

    const team = await Team.create({
      name: name,
      password: hashedPassword,
      members: [user._id],
    })
    await user.updateOne({ team_id: team._id })

    return NextResponse.json({ message: 'New team created' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
        {message: 'An error occurred while creating a new team.'},
      { status: 500 },
    )
  }
}
