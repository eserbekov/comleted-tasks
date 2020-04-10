// 8 kyu. Remove First and Last Character Part Two

function array(arr){
    return arr.split(',').slice(1, -1).join(' ') || null
}

