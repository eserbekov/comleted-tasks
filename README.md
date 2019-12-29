# solved-tasks
#### Lario and Muigi Pipe Problem
```javascript
function pipeFix(numbers){
  let firstIndex = numbers[0];
  let newArray = [];
  for (let i = 0; firstIndex <= Math.max(...numbers); i++ ){
    newArray.push(firstIndex);
    firstIndex++;
  }
  return newArray;
}
```
#### Expressions Matter
```javascript
function expressionMatter(a, b, c) {
  return Math.max( a+b+c, (a+b)*c, a*(b+c), a*b*c );
}
```
#### Tortoise racing
```javascript
function race(v1, v2, g) {
  if (v2 <= v1) {
    return null;
  }
  let res = Math.trunc(3600*g/(v2-v1));
  return [Math.trunc(res/3600), Math.trunc(res/60)%60, res%60];
}
```















