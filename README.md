# solved-tasks
#### isReallyNaN
```javascript
const isReallyNaN = (val) => {
  return Number.isNaN(val);
  return true || false;
};
```
#### Filter the number
```javascript
let FilterString = function(value) {
  let str = '';
  for(let i=0; i < value.length; i++){
    if(value[i]== +value[i]) str+=value[i];
  }
  return +str;
}
```