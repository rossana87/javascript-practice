function chunk(arr, size){
    let finalResult = []

    for(let i = 0; i < arr.length; i += size){
        
        finalResult.push(arr.slice(i, i + size))
        
    }

    return finalResult
}

console.log(chunk([1, 2, 3, 4, 5], 2))