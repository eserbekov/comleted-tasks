// 6 kyu. Unique In Order

function uniqueInOrder(iterable){
    const arr = [];
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i]!==iterable[i+1])
            arr.push(iterable[i]);
    }
    return arr;
}