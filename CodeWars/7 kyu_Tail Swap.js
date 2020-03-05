// 7 kyu. Tail Swap

function tailSwap(arr) {
    let res = arr.map(el => el.split(':'));
    return [res[0][0] + ':' + res[1][1] , res[1][0] + ':' + res[0][1]];
}