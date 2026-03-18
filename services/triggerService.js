import { checkFraud } from "./fraudService.js"
import { getWeather } from "./weatherService.js"
import User from "../models/User.js"       
import Claim from "../models/Claim.js" 
export const triggerClaims = async (city, triggerType, amount) => {

  const users = await User.find({ city })

  const weather = await getWeather(city)

  for (const user of users) {

    const fraudCheck = await checkFraud(user, triggerType, weather)

    if (fraudCheck.fraud) {
      console.log(`Fraud detected for ${user.name}: ${fraudCheck.reason}`)
      continue
    }

    await Claim.create({
      userId: user._id,
      triggerType,
      amount,
      status: "APPROVED"
    })

    console.log(`Claim created for ${user.name}`)

  }
}