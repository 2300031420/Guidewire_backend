import Claim from "../models/Claim.js"

export const createClaim = async (req, res) => {
  try {
    const claim = await Claim.create(req.body)
    res.json(claim)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}