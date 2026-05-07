function average(numbers){
    let result = 0;
    for(let i = 0; i < numbers.length; i++){
        result = (result + numbers[i])
    }
    let average = result / numbers.length
    return average
}

//console.log(average([2, 4, 6, 8]))

function averageWithReduce(numbers){
    const total = numbers.reduce((acc, number) => acc + number ,0)
    const average = total / numbers.length
    return average
}

//console.log(averageWithReduce([2, 4, 6, 8]))