function sumDigits(n){
    //convert into a string and into an array
    const convert = n.toString().split('')
    let sum = 0
    //iterate through
    for (let i = 0; i < convert.length; i++){
        //convert back into a number
        const nums = Number(convert[i])
        sum += nums
    }
    return sum
}

function sumDigitsTwo(n){
    let sum = 0;
    while(n > 0){
        const digit = n % 10
        sum = sum + digit
        n = Math.floor(n / 10)
    }
    return sum
}

function sumDigitsReduce(n){
 return n.toString().split('').reduce((acc, initialVal) => acc + Number(initialVal) ,0)
}

//console.log(sumDigitsReduce(1234))