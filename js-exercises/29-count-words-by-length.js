function countWordsByLength(sentence){
    const word = sentence.split(' ')
    let count = {}
    for (let i = 0; i < word.length; i++) {
        const wordLength = word[i].length
        if(count[wordLength]){
            count[wordLength]++
        } else {
            count[wordLength] = 1
        }
    }
    return count
}

function countWordsByLengthReduce(sentence){
    return sentence.split(' ').reduce((count, currentWord) => {
        let wordLength = currentWord.length
        if(count[wordLength]){
            count[wordLength]++
        } else {
            count[wordLength] = 1
        }
        return count
    }, {})
}

//console.log(countWordsByLengthReduce("I am learning JavaScript today"))

// object { key: word length, value: number of words with that length }