//7 kyu. Find the capitals

const capitals = word =>  {
    let index = [];
    for(let i = 0; i< word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            index.push(i)
        }
    } return index
};