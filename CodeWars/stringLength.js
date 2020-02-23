//8 kyu. get character from ASCII Value

function getChar(c){
    return String.fromCodePoint(c)
}

//8 kyu. Is this my tail?

function correctTail(bod, tail) {
    let sub = bod.substr(bod.length-(tail.length))
    if (sub === tail) {
        return true
    }
    else
        return false
}