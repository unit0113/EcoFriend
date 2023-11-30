import { NextRequest, NextResponse } from 'next/server'
import { connectMongoDB } from '@/lib/mongodb'
import Team from '@/models/team'
import User from '@/models/user'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
    try {

        await connectMongoDB()

		if (req.method !== 'POST') {
			return NextResponse.json(
                {message: 'Method Error'},
                {status: 405},
            )
		}

        const {teamName, password, userEmail} = await req.json()
        console.log('Passed req: ', teamName, password, userEmail);

        const team = await Team.findOne({name: teamName})
        if (!team) {
            return NextResponse.json(
                {message: 'Team not found'},
                {status: 401},
            )
        }
        console.log("Passed existingTeam check");

		// Add user to team, update user info with team id
		const user = await User.findOne({email: userEmail })
		if (!user) {
			return NextResponse.json(
				{message: 'User not found'},
				{status: 401},
			)
		}
		console.log("Passed findUser check");

		// Confirm provided password is valida
		const passwordsMatch = await bcrypt.compare(password, team.password)
		if (!passwordsMatch) {
		return NextResponse.json(
				{ message: 'Invalid team password' },
				{ status: 403 },
			)
		}
		console.log("Passed password check");

		// Confirm team is not full
		if (team.members.length >= 4) {
		return NextResponse.json({ message: 'Team is full' }, { status: 401 })
		}
		console.log("Passed num members");

		await team.updateOne({ $push: { members: user._id } })
		console.log("Passed update members");
		await user.updateOne({ team_id: team._id })
		console.log("Passed update user");

		return NextResponse.json({ message: 'Team Joined' }, { status: 201 })
		console.log("Team Joined");
	} catch (error) {
		return NextResponse.json(
		{ message: 'An error occured while joining a team.' },
		{ status: 500 },
		)
  }
}
