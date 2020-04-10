// 8 kyu. Regex count lowercase letters

function lowercaseCount(str){
    let lowerCaseStr = str.match(/[a-z]/g);
    return (lowerCaseStr === null)? 0 : lowerCaseStr.join('').toString().length;
}