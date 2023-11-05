import mongoose from 'mongoose'

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database connection established')
  } catch (error) {
    console.log('Unable to connect to database: ', error)
  }
}
