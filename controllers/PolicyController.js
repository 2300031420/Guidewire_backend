import Policy from "../models/Policy.js"

export const createPolicy = async (req, res) => {
  try {
    const policy = await Policy.create(req.body)
    res.json(policy)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}