function capitalizeWords(sentence){
    const words = sentence.split(' ')

    const capitalizedWords = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    })
    return capitalizedWords.join(' ')
}

//console.log(capitalizeWords("learning javascript is fun"))