import {connectMongoDB} from '@/lib/mongodb'
import Team from '@/models/team'
import {NextRequest, NextResponse} from 'next/server'

// Check if a team exists in the database
export async function POST(req: NextRequest) {
    try {
        await connectMongoDB()
        const {name} = await req.json()
        const team = await Team.findOne({name}).select('name')
        return NextResponse.json({team})
    } catch (error) {
        console.log(error)
    }
}
