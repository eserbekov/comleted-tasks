// 8 kyu. Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
    const newArr = numbers.filter(number => number % divisor === 0);
    return newArr;
}