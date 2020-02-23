// 7 kyu. Santa's Naughty List

let findChildren = (sL, ch) => sL
    .filter(a => ch.includes(a)).sort()
    .filter((a, i, arr ) => !arr.slice( i + 1 )
    .includes(a));

// 8 kyu. My head is at the wrong end!

function fixTheMeerkat(arr) {
    return arr.reverse();
}

// 8 kyu. Convert number to reversed array of digits

function digitize(n) {
    return String(n).split('').reverse().map(Number)
}

