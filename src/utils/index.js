export const readableTime = seconds => {
  seconds = Math.floor(seconds)
  const hours = Math.floor(seconds / (60 * 60))
  seconds -= hours * 60 * 60
  const minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  if (hours !== 0) {
    return `${hours}:${leadingZero(minutes)}:${leadingZero(seconds)}`
  }
  if (minutes !== 0) {
    return `${minutes}:${leadingZero(seconds)}`
  }
  return seconds
}
