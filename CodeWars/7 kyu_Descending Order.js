// 7 kyu. Descending Order

function descendingOrder(n){
    return +n.toString().split('').sort((a,b)=> b-a).join('')
}