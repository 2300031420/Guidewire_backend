import mongoose from "mongoose"

const policySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    weeklyPremium: Number,
    coverageAmount: Number,
    status: {
      type: String,
      default: "ACTIVE"
    },
    startDate: Date,
    endDate: Date
  },
  { timestamps: true }
)

const Policy = mongoose.model("Policy", policySchema)

export default Policy