// 7 kyu. Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
    const sum = numbers.sort((a,b) => a-b).slice(0,2);
    return sum[0] + sum[1];
}