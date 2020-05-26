// 8 kyu. Array plus array

function arrayPlusArray(arr1, arr2) {
    const res = arr1.concat(arr2);
    return res.reduce((a,c)=> a+c);
}