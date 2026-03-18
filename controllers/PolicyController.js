import axios from "axios"
import Policy from "../models/Policy.js"
import { getWeather } from "../services/weatherService.js"

export const createPolicy = async (req, res) => {

  try {

    const { userId, city } = req.body

    // 🌦️ Get weather
    const weather = await getWeather(city)

    const temp = weather.main.temp - 273.15

    const rain = weather.weather[0].main === "Rain" ? 1 : 0

    // 🤖 CALL AI MODEL (Flask server)
    const aiResponse = await axios.post("http://localhost:5001/predict", {
      rain,
      temp
    })

    const premium = aiResponse.data.premium

    // 📄 Create policy
    const policy = await Policy.create({
      userId,
      weeklyPremium: premium,
      coverageAmount: 500,
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    })

    res.json({
      message: "Policy created using AI",
      premium,
      policy
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }

}