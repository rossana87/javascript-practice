// Given seizure logs, return the day of the week ("Monday", "Tuesday", …) on which days seizures happened most often

const logs = [
    { date: "2026-05-01", had_seizure: false, type: "absence" },
    { date: "2026-05-02", had_seizure: true, type: "tonic" },
    { date: "2026-05-03", had_seizure: false, type: "absence" },
    { date: "2026-05-04", had_seizure: false, type: "myoclonic" },
    { date: "2026-05-04", had_seizure: true, type: "absence" },
];


function mostOftenDays(){
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const counts = {}

  for(const item of logs){
    if(item.had_seizure){
      const date = new Date(item.date).getDay()
      const dayName = days[date]
      if(!counts[dayName]){
        counts[dayName] = 0
      } 
      counts[dayName]++
    }
  }

  let mostFrequentDays = []

  for(const day in counts){
      mostFrequentDays.push(day)
  }
  return mostFrequentDays.join(', ')
}

console.log(mostOftenDays())