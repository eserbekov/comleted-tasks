//8 kyu. validate code with simple regex

function validateCode (code) {
    code = code.toString();
    return (code.startsWith('1') || code.startsWith('2') || code.startsWith('3'))? true : false;
}

// С использованием регулярного выражения

function validateCode (code) {
    return /^[1-3]/g.test(code)
}