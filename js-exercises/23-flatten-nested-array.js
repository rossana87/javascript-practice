function flatten(arr){
    // create an empty array
    const result = [];
    //loop through 
    for(let item of arr){
        //if it isn't an array just push
        if(!Array.isArray(item)){
            result.push(item)
        //if it is an array loop through and push
        } else if(Array.isArray(item)){
            for(let innerItem of item){
                result.push(innerItem)
            }
        }
    }
    return result
}

function flattenTwo(arr){
    return arr.flat()
}

//console.log(flatten([1, [2, 3], 4, [5, 6]]))