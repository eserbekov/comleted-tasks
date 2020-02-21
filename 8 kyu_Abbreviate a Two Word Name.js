// 8 kyu. Abbreviate a Two Word Name

const abbrevName = name => {const nam = name.split(' ');
    return nam[0].charAt(0).toUpperCase()+'.' + nam[1].charAt(0).toUpperCase();
}