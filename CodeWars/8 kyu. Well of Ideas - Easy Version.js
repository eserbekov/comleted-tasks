// 8 kyu. Well of Ideas - Easy Version
function well(x){
    const arr = x.filter(word => word.includes('good'));
    return (arr.length <= 2 && arr.length > 0)? 'Publish!' : (arr.length > 2)? 'I smell a series!' : 'Fail!';
}