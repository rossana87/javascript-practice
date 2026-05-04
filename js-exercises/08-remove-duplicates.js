function uniqueSet(arr){
    return [...new Set(arr)]
}

function unique(arr){
    let result = [];

    for(let item of arr){
        if(!result.includes(item)){
            result.push(item)
        }
    }
    return result
}


//console.log(uniqueSet([1, 2, 2, 3, 3, 3, 4]))
//console.log(unique([1, 2, 2, 3, 3, 3, 4]))

