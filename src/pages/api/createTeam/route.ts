import {NextResponse} from 'next/server'
import {connectMongoDB} from '@/lib/mongodb'
import Team from '@/models/team'
import User from '@/models/user'
import bcrypt from 'bcryptjs'
import {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from 'next-auth/client';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await getSession({req});

        await connectMongoDB()

        console.log('Connected to MongoDB')
        const {name, password, userEmail} = await req.body;
        console.log(`Received name: ${name}, password: ${password}, userEmail: ${userEmail}`)

        // Check if team name already exists
        const existingTeam = await Team.findOne({name})
        if (existingTeam) {
            return NextResponse.json(
                {message: 'Team name already exists'},
                {status: 401},
            )
        }

        // check if user exists
        const user = await User.findOne({email: userEmail}); // Assuming the field is 'email'
        if (!user) {
            return NextResponse.json(
                {message: 'User not found'},
                {status: 404}
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log('Password hashed')

        const team = await Team.create({
            name: name,
            password: hashedPassword,
            members: [user.email],
        })
        console.log(`Team created: ${team._id}`)

        await user.updateOne({team_id: team._id})
        console.log('User updated')

        return NextResponse.json({message: 'New team created'}, {status: 201})
    } catch (error) {
        return NextResponse.json(
            {message: 'An error occurred while creating a new team.'},
            {status: 500},
        )
    }
}