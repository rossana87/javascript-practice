const logs = [
  { date: "2026-05-01", had_seizure: true, type: "absence" },
  { date: "2026-05-02", had_seizure: true, type: "tonic" },
  { date: "2026-05-03", had_seizure: true, type: "absence" },
  { date: "2026-05-04", had_seizure: true, type: "myoclonic" },
  { date: "2026-05-05", had_seizure: true, type: "absence" },
];

function count() {
  const count = {}
  const result = []

  for (const item of logs){
    const type = item.type
    
    if(!count[type]){
      count[type] = []
    } else {
      count[type]++
    }

    for(const type in count){
      if(count[type] > 1){
        result.push(type)
      }
    }
  }
  return result
}

console.log(count());
// output: ['absence']