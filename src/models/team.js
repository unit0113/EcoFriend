import mongoose, { Schema, models } from 'mongoose'

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      default: null,
    },
    members: {
      type: Array,
      defult: [],
    },
  },
  { timestamps: true },
)

const Team = models.Team || mongoose.model('Team', teamSchema)
export default Team
