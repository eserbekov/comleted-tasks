// 8 kyu. Fix your code before the garden dies!

function rainAmount(mm){
    if (mm < 40) {
        return "You need to give your plant " + Math.abs(mm - 40) + "mm of water"
    }
    else {
        return "Your plant has had more than enough water for today!"
    }
}