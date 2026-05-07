function sumEvens(numbers){
    let count = 0
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            
            count += numbers[i]
        }
    }
    return count
}

function sumEvensWithFilter(numbers){
    return numbers.filter((num) => num % 2 === 0).reduce((acc, initialVal) => acc + initialVal, 0)
}   


console.log(sumEvensWithFilter([1, 2, 3, 4, 5, 6]))