function longestWord(sentence){
    let newSentence = sentence.split(' ');

    let word = newSentence[0];
    for(let i = 0; i < newSentence.length; i++){
        if(newSentence[i].length > word.length){
            word = newSentence[i]
        }
    }
    return word
}

//console.log(longestWord("I am learning JavaScript"))