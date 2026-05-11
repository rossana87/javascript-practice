// Given seizure logs over multiple weeks, return the average number of seizure days per 7-day window.

const logs = [
    { date: "2026-05-01", had_seizure: true, type: "absence" },
    { date: "2026-05-02", had_seizure: false },
    { date: "2026-05-03", had_seizure: true, type: "tonic" },
    { date: "2026-05-04", had_seizure: false },
    { date: "2026-05-05", had_seizure: false },
    { date: "2026-05-06", had_seizure: true, type: "absence" },
    { date: "2026-05-07", had_seizure: false },
    { date: "2026-05-08", had_seizure: true, type: "absence" },
    { date: "2026-05-08", had_seizure: true, type: "absence" },
    { date: "2026-05-10", had_seizure: true, type: "absence" },
    { date: "2026-05-11", had_seizure: false },
    { date: "2026-05-12", had_seizure: true, type: "tonic" },
    { date: "2026-05-13", had_seizure: false },
    { date: "2026-05-14", had_seizure: false },
    { date: "2026-05-15", had_seizure: true, type: "absence" },
    { date: "2026-05-16", had_seizure: false },
    { date: "2026-05-17", had_seizure: true, type: "absence" },
    { date: "2026-05-18", had_seizure: false },
  ];

  function averageSeizurePerWeek(){
    const startDate = new Date(logs[0].date)
    const endDate = new Date(logs[logs.length - 1].date)
    const milliseconds = 1000 * 60 * 60 * 24
    const totalDays = (endDate - startDate) / milliseconds + 1
    const totalWeeks = totalDays / 7;

    let seizureDays = 0
    for (const log of logs){
        if(log.had_seizure){
            seizureDays++
        }
    }
    return (seizureDays / totalWeeks).toFixed(2)
  }

  console.log(averageSeizurePerWeek())