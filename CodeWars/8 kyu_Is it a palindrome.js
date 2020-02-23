//8 kyu. Is it a palindrome?

function isPalindrome(x) {
    let y = '';
    for(let i = x.length-1; i >= 0; i--){
        y += x[i];
    }
    return x.toLowerCase() === y.toLowerCase();
}