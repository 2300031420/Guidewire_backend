import express from "express"
import { createPolicy } from "../controllers/PolicyController.js"

const router = express.Router()

router.post("/create", createPolicy)

export default router