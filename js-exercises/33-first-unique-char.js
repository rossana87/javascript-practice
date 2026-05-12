// Write firstUnique(str) that returns the first character that appears only once. Return null if there isn’t one.
// Test: firstUnique("javascript") → "j", firstUnique("aabb") → null

function firstUnique(str){
    for (let i = 0; i < str.length; i++){   
        const char = str[i]
        
        if(str.indexOf(char) === str.lastIndexOf(char)){
            return char
        }
    }
    return null
}

//console.log(firstUnique("javascript"))