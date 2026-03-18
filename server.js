import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import User from "./models/User.js"
import userRoutes from "./routes/userRoutes.js"
import policyRoutes from "./routes/policyRoutes.js"
import claimRoutes from "./routes/claimRoutes.js"
import Claim from "./models/Claim.js"
import { getWeather } from "./services/weatherService.js"
import { triggerClaims } from "./services/triggerService.js"

import "./jobs/weatherMonitor.js"   // IMPORTANT: starts cron job

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

  const city = req.params.city

  const weather = await getWeather(city)

  const condition = weather.weather[0].main

  if (condition === "Rain") {

    await triggerClaims(city, "rain", 300)

  }

  res.json(weather)

})
//Analystics route
app.get("/api/admin/stats", async (req, res) => {

  const totalUsers = await User.countDocuments()
  const totalClaims = await Claim.countDocuments()

  const totalPayout = await Claim.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ])

  res.json({
    totalUsers,
    totalClaims,
    totalPayout: totalPayout[0]?.total || 0
  })

})
//testing 
app.get("/test-trigger", async (req, res) => {

  try {

    const cities = await User.distinct("city")

    for (const city of cities) {

      // FORCE TEST MODE
      const condition = "Rain"

      if (city === "Delhi") {
        console.log(`Curfew detected in ${city}`)
        await triggerClaims(city, "curfew", 400)
        continue
      }

      if (condition === "Rain") {
        console.log(`Rain detected in ${city}`)
        await triggerClaims(city, "rain", 300)
      }

    }

    res.json({ message: "Trigger executed successfully" })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})