//8 kyu. Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str,c){
    return str.lastIndexOf(c)===-1 ? -1 :str.lastIndexOf(c)-str.search(c)
}