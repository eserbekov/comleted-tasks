//7 kyu. Credit Card Mask

function maskify(cc) {
    let maskedString = "";
    for(let i = 0; i < cc.length - 4; i++) {
        maskedString += "#";
    }

    for(let j = 4; j >= 1; j--) {
        let lastCharacter = cc.charAt(cc.length - j);
        maskedString += lastCharacter;
    }

    return maskedString;
}
