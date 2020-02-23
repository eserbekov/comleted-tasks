//8 kyu. Remove First and Last Character

function removeChar(str){
    let newStr = str.substr(1,str.length-2);
    return newStr;
}