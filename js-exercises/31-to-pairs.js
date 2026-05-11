//Write toPairs(obj) that returns an array of [key, value] pairs.

function toPairs(obj){
    let array = []
    for (const [key, value] of Object.entries(obj)) {
        array.push([key, value])
    }
    return array
}

//console.log(toPairs({ a: 1, b: 2 }))

function fromPairs(pairs){
    return Object.fromEntries(pairs)
}


//console.log(fromPairs([['a', 1], ['b', 2]]))