// 8 kyu. Enumerable Magic #1 - True for All?

function all( arr, fun ){
    return arr.every(fun);
}

// 8 kyu. Grasshopper - Array Mean

const findAverage = num => num.reduce((a,c) => (a+c))/num.length;

// 8 kyu. Beginner - Reduce but Grow

function grow(x){
    return x.reduce((acc, curr) => acc * curr, 1)
}

// 8 kyu. Array plus array

function arrayPlusArray(arr1, arr2) {
    const res = arr1.concat(arr2);
    return res.reduce((a,c)=> a+c);
}