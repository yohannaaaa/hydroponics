// Utility function to generate random number within range
const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate temperature within optimal range (18-24°C)
export const generateTemperature = () => {
  return randomInRange(20, 23);
}

// Generate humidity (40-70%)
export const generateHumidity = () => {
  return randomInRange(40, 70);
}

// Generate water level (60-100%)
export const generateWaterLevel = () => {
  return randomInRange(60, 100);
}

// Generate system status
export const generateSystemStatus = () => {
  const statuses = ['Active', 'Standby'];
  return statuses[Math.floor(Math.random() * statuses.length)];
}