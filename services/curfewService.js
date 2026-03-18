export const checkCurfew = (city) => {

  // Example mock logic
  const curfewCities = ["Delhi"]

  if (curfewCities.includes(city)) {
    return true
  }

  return false
}