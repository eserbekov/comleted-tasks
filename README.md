# solved-tasks
#### Calculate Two People's Individual Ages
```javascript
function getAges(sum,difference){
  let individualAge2 = (sum-difference)/2;
  let individualAge1 = sum-individualAge2;
  if(sum < 0 || difference < 0 || individualAge1 < 0 || individualAge2 < 0) return null;
  else return ([individualAge1, individualAge2]);
};
```