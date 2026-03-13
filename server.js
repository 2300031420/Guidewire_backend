import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

import userRoutes from "./routes/userRoutes.js"
import policyRoutes from "./routes/policyRoutes.js"
import claimRoutes from "./routes/claimRoutes.js"

import { getWeather } from "./services/weatherService.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/users", userRoutes)
app.use("/api/policies", policyRoutes)
app.use("/api/claims", claimRoutes)

app.get("/", (req, res) => {
  res.send("GigShield Backend Running")
})

/* WEATHER API ROUTE */

app.get("/weather/:city", async (req, res) => {
  try {

    const city = req.params.city

    const weather = await getWeather(city)

    res.json(weather)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})