import Claim from "../models/Claim.js"

export const checkFraud = async (user, triggerType, weather) => {

  if (triggerType === "rain" && weather.weather[0].main !== "Rain") {
    return { fraud: true, reason: "Fake weather claim" }
  }

  const recentClaims = await Claim.countDocuments({
    userId: user._id,
    createdAt: {
      $gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
    }
  })

  if (recentClaims > 2) {
    return { fraud: true, reason: "Too many claims" }
  }

  return { fraud: false }
}