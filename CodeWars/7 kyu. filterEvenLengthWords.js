//7 kyu. filterEvenLengthWords
function filterEvenLengthWords(words) {
    const evenLengthWord = words.filter(word => word.length%2===0);
    return evenLengthWord;
}