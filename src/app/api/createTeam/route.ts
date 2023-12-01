import {NextRequest, NextResponse} from 'next/server'
import {connectMongoDB} from '@/lib/mongodb'
import Team from '@/models/team'
import User from '@/models/user'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
    try {
        await connectMongoDB()

        const {name, password, userEmail} = await req.json()

        const existingTeam = await Team.findOne({name})
        if (existingTeam) {
            return NextResponse.json(
                {message: 'Team name already exists'},
                {status: 401},
            )
        }
        console.log("Passed existingTeam check");

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log("Passed hashedPass check");

        const user = await User.findOne({email: userEmail})
        console.log("Passed findUser check");

        const team = await Team.create({
            name: name,
            password: hashedPassword,
            members: [user._id],
        })
        console.log("Passed team creation check", team._id);

        await User.updateOne({_id: user._id}, {$set: {team_id: team._id}});
        console.log("Passed update user check");

        return NextResponse.json({message: 'New team created'}, {status: 201})
    } catch (error) {
        return NextResponse.json(
            {message: 'An error occurred while creating a new team.'},
            {status: 500},
        )
    }
}
