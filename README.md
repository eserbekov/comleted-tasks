# solved-tasks
#### Squares sequence
```javascript
function squares(x, n) {
  let a = 1;
  let arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(Math.pow(x,a));
    a*=2;
  }
  return arr;
}
```
#### Square Every Digit
```javascript
function squareDigits(num){
  const digits = num.toString().split('')
  const squaredDigits = digits.map(n => n * n)
  const squaredNumber = squaredDigits.join('')
  return +squaredNumber;
  
}
```
#### You're a square!
```javascript
let isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}
``` 