// 8 kyu. Correct the mistakes of the character recognition software

function correct(string){
    return string.replace(/0/gi, 'O').replace(/1/gi, 'I').replace(/5/gi, 'S')
}