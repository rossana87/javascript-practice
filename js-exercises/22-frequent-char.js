function mostFrequentChar(str){    
    let char = ''
    let counts = {}
    let maxCount = 0

    for(let i = 0; i < str.length; i++){
       let currentChar = str[i]

       if(counts[currentChar]){
        counts[currentChar]++
       } else {
        counts[currentChar] = 1
       }

       if(counts[currentChar] > maxCount){
        maxCount = counts[currentChar]
        char = currentChar
       }
    }
    return char
}

//console.log(mostFrequentChar("javascript"))

function mostFrequent(str){
    const string = str.split('')
    const counts = string.reduce((counts, currentChar) => {
        
        if(counts[currentChar]){
            counts[currentChar]++
        } else {
            counts[currentChar] = 1 
        }
        
      return counts
    }, {})
    let maxCount = 0;
    let char = '';

    for( let currentChar in counts){
        if(counts[currentChar] > maxCount){
            maxCount = counts[currentChar]
            char = currentChar  
        }
    }

    return char
}

//console.log(mostFrequent("javascript"))