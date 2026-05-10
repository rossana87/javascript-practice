function range(start, end){

    let array = []
    let currentNumber = start;
    while(currentNumber <= end) {
        array.push(currentNumber);
        currentNumber++;
        
    }
    return array
}

function rangeTwo(start, end){
    let array = []
    for(let i = start; i <= end; i++){
        array.push(i)
    }
    return array
}

//console.log(rangeTwo(2, 6))