// 8 kyu. Remove the time

function shortenToDate(longDate) {
    let char = longDate.indexOf(',')
    return longDate.slice(0,char)
}