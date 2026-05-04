function findMax(numbers){
    let max = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        
        if(numbers[i] > max){
            max = numbers[i]
        }
    }
    return max;
}

function findMaxEachLoop(numbers){
    let max = numbers[0];

    for(const nums of numbers){
        if(nums > max) {
            max = nums
        }
    }
    return max
}

//console.log(findMax([3, 7, 2, 9, 4]))
console.log(findMaxEachLoop([3, 7, 2, 9, 4]))