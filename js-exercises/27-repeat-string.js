function repeat(str, n){
    let newString = ''
    for(let i = 0; i < n; i++){
        newString += str
    }
    return newString
}

function repeatTwo(str, n){
    return str.repeat(n)
}

//console.log(repeat("ab", 3))