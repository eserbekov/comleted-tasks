//7 kyu. Thinking & Testing : Something capitalized

function testit(s){
    if(s === '') return '';
    let arr = s.split(' ');
    return arr.map(el => el.slice(0, el.length-1) + el[el.length-1].toUpperCase()).join(' ')
}