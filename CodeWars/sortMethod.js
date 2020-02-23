// 7 kyu. Two Oldest Ages

const twoOldestAges = ages => ages.sort((a,b) => a - b).slice(-2);

// 7 kyu. Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
    const sum = numbers.sort((a,b) => a-b).slice(0,2);
    return sum[0] + sum[1];
}

// 8 kyu. Sum of differences in array

function sumOfDifferences(arr) {
    if(arr.length === 0) return 0;
    arr.sort((a,b) => b-a);
    return arr[0] - arr[arr.length-1];
}