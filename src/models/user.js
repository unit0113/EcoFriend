import mongoose, { Schema, models } from 'mongoose'

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      default: null,
    },
    level: {
      type: Number,
      default: 1,
    },
    awards: {
      type: Array,
      defult: [],
    },
    team_id: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true },
)

const User = models.User || mongoose.model('User', userSchema)
export default User
