import express from "express"
import { createClaim } from "../controllers/claimController.js"

const router = express.Router()

router.post("/create", createClaim)

export default router