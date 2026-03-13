import cron from "node-cron"
import { getWeather } from "../services/weatherService.js"

cron.schedule("*/10 * * * *", async () => {

  const weather = await getWeather("Hyderabad")

  if (weather.rain) {
    console.log("Rain disruption detected")
  }

})