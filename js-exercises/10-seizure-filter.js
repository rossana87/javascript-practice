const logs = [
    { date: "2026-05-01", had_seizure: false },
    { date: "2026-05-02", had_seizure: true, type: "absence" },
    { date: "2026-05-03", had_seizure: false },
    { date: "2026-05-04", had_seizure: true, type: "tonic" },
  ]

  const seizureLog = () => {
    return logs.filter((log) => log.had_seizure === true)
  }

console.log(seizureLog());