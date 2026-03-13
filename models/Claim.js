import mongoose from "mongoose"

const claimSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    triggerType: String,
    amount: Number,
    status: {
      type: String,
      default: "PENDING"
    }
  },
  { timestamps: true }
)

const Claim = mongoose.model("Claim", claimSchema)

export default Claim