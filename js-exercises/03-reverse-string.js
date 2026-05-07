function reverse(str) {
    return str.split('').reverse().join('');
}

//console.log(reverse("hello"))

function reverseForLoop(str){
    let result = "";
    for (let i = 0; i < str.length; i++ ){
        
        result = str[i] + result
    }
    return result
}

//console.log(reverseForLoop("hello"))

function reverseBackwordForLoop(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--){
       result += str[i]
    }
    return result
}

//console.log(reverseBackwordForLoop("hello"))