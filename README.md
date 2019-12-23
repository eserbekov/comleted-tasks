# solved-tasks
#### Sum of the first nth term of Series
```javascript
function SeriesSum(n){
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum += 1/(1+i*3);
    }
    return sum.toFixed(2);
}
```