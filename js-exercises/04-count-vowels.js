function countVowels(str){
    const vowels = "aeiou";
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++
        }
    }
    return count;
}

const countVowelsReduce = (str) => {
    const vowels = "aeiou";

    const count = str.split('').reduce((acc, currentLetter) => {
        if (vowels.includes(currentLetter.toLowerCase())) {
            return acc + 1;
        }
        return acc
    }, 0)

    return count
}


//console.log(countVowels("jAvascript"))
//console.log(countVowelsReduce("jAvascript"))