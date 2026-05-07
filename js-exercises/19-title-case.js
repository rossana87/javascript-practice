function firstLetters(sentence){
    const newSentence = sentence.split(' ')
    let letters = ''
    for (let i = 0; i < newSentence.length; i++){
        
       letters += newSentence[i][0].toUpperCase()

    }
    return letters
}
//console.log(firstLetters("learning javascript is fun"))