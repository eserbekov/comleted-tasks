//8 kyu. Get number from string

// function getNumberFromString(s) {
//     let str = s.replace(/[a-z\D]/g, '');
//     return +str;
// }

// 2ой вариант
function getNumberFromString(s) {
    return +s.replace(/\D/g,'')
}