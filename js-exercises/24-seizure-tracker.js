const logs = [
    { date: "2026-05-01", had_seizure: false },
    { date: "2026-05-02", had_seizure: false },
    { date: "2026-05-03", had_seizure: true, type: "absence" },
    { date: "2026-05-04", had_seizure: false },
    { date: "2026-05-05", had_seizure: false },
    { date: "2026-05-06", had_seizure: false },
    { date: "2026-05-07", had_seizure: true, type: "tonic" },
    { date: "2026-05-08", had_seizure: false },
  ];

//Given an array of daily seizure logs (sorted by date), return the length of the longest streak of consecutive seizure-free days.

  function seizureTracker(){
    let currentStreak = 0;
    let longestStreak = 0; 
    for(let seizure of logs) {
        
        if(!seizure.had_seizure){
            currentStreak++
            
        if(currentStreak > longestStreak){
            longestStreak = currentStreak
        }  
        } else {
            currentStreak = 0;
        }
    }
    return longestStreak
}    


  
  //console.log(seizureTracker())