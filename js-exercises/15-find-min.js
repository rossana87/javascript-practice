function findMin(numbers){
    let num = numbers[0]
    
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] < num){
            num = numbers[i]
        }
    }
    return num
}

function find(numbers){
return Math.min(...numbers)
}

//console.log(find([5, 2, 8, 1, 9]))