// 8 kyu. Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
    const newArr = numbers.filter(number => number % divisor === 0);
    return newArr;
}

// 8 kyu. Removing Elements
function removeEveryOther(arr){
    const myArr = arr.filter((a , i) => i%2 ===0);
    return myArr;
}

 // 8 kyu. Well of Ideas - Easy Version
function well(x){
    const arr = x.filter(word => word.includes('good'));
    return (arr.length <= 2 && arr.length > 0)? 'Publish!' : (arr.length > 2)? 'I smell a series!' : 'Fail!';
}

// 7 kyu. Find how many times did a team from a given country win the Champions League?
function countWins(winnerList, country) {
    const count = winnerList.filter((count) => count.country === country).length;
    return count;
}

//7 kyu. filterEvenLengthWords
function filterEvenLengthWords(words) {
    const evenLengthWord = words.filter(word => word.length%2===0);
    return evenLengthWord;
}