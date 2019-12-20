# solved-tasks
#### simple calculator
```javascript
function calculator(a,b,sign){
  if(typeof a !== 'number'  || typeof b != 'number') return "unknown value"
    switch(sign){
      case '+': return (a+b);
      case '-': return (a-b);
      case '*': return (a*b);
      case '/': return (a/b);
      default:
      return "unknown value"
  
    }

}
```
#### Factorial
```javascript
function factorial(n){
let f = 1;
  for(let i = 1; i<=n; i++){
    f*=i;
  }return f;
}
```