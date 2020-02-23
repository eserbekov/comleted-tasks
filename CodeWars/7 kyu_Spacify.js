// 7 kyu. Spacify

function spacify(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        newStr += str[i] + ' ';
    }
    return newStr.slice(0, -1);
}