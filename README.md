# solved-tasks
#### Sum of Multiples
```javascript
function sumMul(n,m){
  let sum = 0;
  if(n<=0||m<=0)return "INVALID";
  for(let i = 0; i < m; i++){
    if(i%n===0)  sum+=i;
    }
    return sum;
}
```
#### Beginner Series #3 Sum of Numbers
```javascript
function getSum( a,b ){
 let sum = 0;
 if(a===b) return a||b;
 for(let i = Math.min(a,b); i <= Math.max(a,b); ++i){
   sum += i;
   }return sum;  
}
```