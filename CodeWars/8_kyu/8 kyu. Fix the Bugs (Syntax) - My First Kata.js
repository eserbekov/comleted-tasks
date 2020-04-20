// 8 kyu. Fix the Bugs (Syntax) - My First Kata

function myFirstKata(a, b) {
    if (typeof(a) === "number" && typeof(b) === "number") {
        return a % b + b % a;
    } else {
        return false;
    }
}