// 8 kyu. Holiday VI - Shark Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let sharkTime = sharkDistance / sharkSpeed;
    let yourTime = pontoonDistance / youSpeed;
    if(dolphin === true){
        sharkTime *= 2;
    }
    if(sharkTime > yourTime){
        return "Alive!";
    }
    else return "Shark Bait!";
}