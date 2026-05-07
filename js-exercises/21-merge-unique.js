function mergeUnique(a,b){
    const combined = a.concat(b)
    const unique = [...new Set(combined)]
    return unique
}

function mergeUniqueOptTwo(a,b){
    const combined = a.concat(b)
    const result = [];
    for(let item of combined){
        if(!result.includes(item)){
            result.push(item)
        } 
    }
    return result
}

console.log(mergeUniqueOptTwo([1, 2, 3], [3, 4, 5]))