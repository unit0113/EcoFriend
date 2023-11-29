import mongoose, {models, Schema} from 'mongoose'

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
      members: [
          {
              type: Schema.Types.ObjectId,
              ref: 'User'
          }
      ],
  },
  { timestamps: true },
)

const Team = models.Team || mongoose.model('Team', teamSchema)
export default Team
