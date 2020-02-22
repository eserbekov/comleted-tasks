// 7 kyu.Numbers to Letters

const switcher = x => x.reduce((word, number) => `${word}${' ?!abcdefghijklmnopqrstuvwxyz'[29 - number]}`, '')