// 8 kyu. Removing Elements
function removeEveryOther(arr){
    const myArr = arr.filter((a , i) => i%2 ===0);
    return myArr;
}