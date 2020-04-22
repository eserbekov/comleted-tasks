// 8 kyu. Even or Odd

function even_or_odd(number) {
    if(number % 2 === 0) {return 'Even';}
    else if(number % 2 === 1 || number % 2 === -1) {return 'Odd';}
}