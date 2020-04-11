// 7 kyu. Santa's Naughty List

let findChildren = (sL, ch) => sL
    .filter(a => ch.includes(a)).sort()
    .filter((a, i, arr ) => !arr.slice( i + 1 )
        .includes(a));