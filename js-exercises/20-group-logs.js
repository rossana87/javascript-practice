const logs = [
    { date: "2026-05-01", had_seizure: false },
    { date: "2026-05-02", had_seizure: true, type: "absence" },
    { date: "2026-05-03", had_seizure: true, type: "tonic" },
    { date: "2026-05-04", had_seizure: true, type: "absence" },
    { date: "2026-05-05", had_seizure: true, type: "absence" },
  ];

//   Given an array of seizure logs, return an object where keys are seizure types and values are how many times each occurred. Skip entries where had_seizure is false.
function logSeizures(){
    return logs
    .filter((log) => log.had_seizure)
    .reduce((acc, log) => {
       
        if(acc[log.type]){
            acc[log.type] = acc[log.type] + 1
        } else {
            acc[log.type] = 1
        }
       
        return acc
    }, {})   
}

//console.log(logSeizures())