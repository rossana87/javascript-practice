function isPalindrome(str){
    const reverse = str.split('').reverse().join('')
    return str === reverse;
}

//console.log(isPalindrome("hello"))

function isPalindromeLoop(str){
    let reversed = ''
    for (let i = 0; i < str.length; i++){
        reversed = str[i] + reversed 
    }
    return str === reversed
}

//console.log(isPalindromeLoop("did"))

function isPalindromeBackwardLoop(str){
    let reversed = ''
    for( let i = str.length - 1; i >= 0; i--){
        reversed += str[i]       
    }
    return str === reversed
}

//console.log(isPalindromeBackwardLoop("did"))