function countOccurrences(arr, value){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            count++
        }
    }
    return count
}

function countOcc(arr, value){
    return arr.filter((num) => num === value).length;
}

function countOccReduce(arr, value){
    return arr.reduce((acc, initialVal) => {

        if(initialVal === value){
           return acc + 1
        }
        return acc
       },0)
    }

//console.log(countOccReduce([1, 2, 2, 3, 2, 4], 2))