//7 kyu. Mumbling

function accum(s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i].toUpperCase() + (s[i].toLowerCase().repeat(i)));
    }
    return arr.join("-");
}