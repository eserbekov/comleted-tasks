# solved-tasks
#### 101 Dalmatians - squash the bugs, not the dogs!
```javascript
function howManyDalmatians(numer){
  const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  let respond = (numer <= 10)? dogs[0]:
  (numer <= 50)? dogs[1]:
  (numer === 101)?  dogs[3] : dogs[2]
  return respond;
  }
```
