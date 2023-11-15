import {NextRequest, NextResponse} from 'next/server'
import {connectMongoDB} from '@/lib/mongodb'
import User from '@/models/user'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
    try {
        await connectMongoDB()
        const {email, oldPW} = await req.json()
        const user = await User.findOne({email})

        if (!user) {
            return NextResponse.json(
                {message: 'An error occured while updating user password.'},
                {status: 500},
            )
        }

        const passwordsMatch = await bcrypt.compare(oldPW, user.password)

        if (!passwordsMatch) {
            return NextResponse.json(
                {message: 'An error occured while updating user password.'},
                {status: 500},
            )
        }

        return NextResponse.json({message: 'Password updated'}, {status: 201})
    } catch (error) {
        return NextResponse.json(
            {message: 'An error occured while updating user password.'},
            {status: 500},
        )
    }
}
