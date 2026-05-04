function countWords(sentence){
    let count = 0;
    const word = sentence.split(' ');
    for (let i = 0; i < word.length; i ++){
        count ++
    }
    return count
}

//console.log(countWords("I am learning JavaScript"))