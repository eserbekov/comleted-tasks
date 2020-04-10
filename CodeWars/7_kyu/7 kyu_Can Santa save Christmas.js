// 7 kyu. Can Santa save Christmas

function determineTime(d){
    let time = 0;
    for(let i = 0; i < d.length; i++){
        let arr = d[i].split(':');
        let h = +arr[0];
        let m = +arr[1];
        let s = +arr[2];
        time += h * 3600 + m * 60 + s;

    }return time<=24*3600
}