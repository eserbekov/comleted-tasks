// 7 kyu. Find how many times did a team from a given country win the Champions League?
function countWins(winnerList, country) {
    const count = winnerList.filter((count) => count.country === country).length;
    return count;
}