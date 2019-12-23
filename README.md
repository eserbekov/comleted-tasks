# solved-tasks
#### Draw stairs
```javascript
function drawStairs(n) {
    let s = '';
    for (let i = 0; i < n; i++) {
        s = s + ' '.repeat(i) + 'I';
        if (i < (n - 1)) {
            s += '\n';
        }
    }
    return s;
}
```