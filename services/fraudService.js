export const checkFraud = (claim, weather) => {

  if (!weather.rain && claim.triggerType === "rain") {
    return true
  }

  return false
}