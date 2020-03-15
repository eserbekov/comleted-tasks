// 7 kyu. Every possible sum of two digits

function digits(num){
    const arr =num.toString().split('');
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            newArr.push( +arr[i] + +arr[j]);
        }
    }
    return newArr;
}