function formatDuration(seconds){
const secondsInHours = 60 * 60
const fullHour = Math.floor(seconds / secondsInHours)
const remainingSeconds = seconds - secondsInHours
const fullMinutes = Math.floor(remainingSeconds / 60)
const secondsAfterMins = remainingSeconds - (fullMinutes * 60)

const result = []

if(fullHour > 0){
  result.push(`${fullHour}h`)
}
if(fullMinutes > 0){
  result.push(`${fullMinutes}m`)
}

result.push(`${secondsAfterMins}s`)

return result.join(', ')

}

console.log(formatDuration(3930))