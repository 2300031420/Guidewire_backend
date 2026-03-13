import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    city: String,
    platform: String,
    riskScore: Number
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User