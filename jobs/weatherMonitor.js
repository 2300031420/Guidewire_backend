import cron from "node-cron"
import User from "../models/User.js"
import { getWeather } from "../services/weatherService.js"
import { triggerClaims } from "../services/triggerService.js"
import { checkCurfew } from "../services/curfewService.js"
cron.schedule("*/10 * * * *", async () => {

  try {

    // Get unique cities where workers exist
    const cities = await User.distinct("city")

    console.log("Checking weather for:", cities)

    

    for (const city of cities) {

      const weather = await getWeather(city)

      const condition = weather.weather[0].main

      if (condition === "Rain") {

        console.log(`Rain detected in ${city}`)

        await triggerClaims(city, "rain", 300)

      }

const isCurfew = checkCurfew(city)

if (isCurfew) {

  console.log(`Curfew detected in ${city}`)

  await triggerClaims(city, "curfew", 400)

  continue
}
const temp = weather.main.temp - 273.15
if (temp > 45) {
  console.log(`Heatwave in ${city}`)
  await triggerClaims(city, "heatwave", 300)
}
if (weather.weather[0].main === "Rain" && weather.rain) {
  console.log(`Flood risk in ${city}`)
  await triggerClaims(city, "flood", 400)
}

const pollution = 300

if(pollution > 250){
  await triggerClaims(city,"pollution",250)
}

    }

  } catch (error) {
    console.error("Weather monitor error:", error)
  }

})