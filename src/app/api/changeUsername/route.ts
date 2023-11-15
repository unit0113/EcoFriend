import {NextRequest, NextResponse} from 'next/server'
import {connectMongoDB} from '@/lib/mongodb'
import User from '@/models/user'

export async function POST(req: NextRequest) {
    try {
        await connectMongoDB()
        const {email, newUsername} = await req.json()
        const user = await User.findOne({email}).select('_id')
        await user?.updateOne({
            username: newUsername,
        })

        return NextResponse.json({message: 'Username updated'}, {status: 201})
    } catch (error) {
        return NextResponse.json(
            {message: 'An error occured while updating username.'},
            {status: 500},
        )
    }
}
