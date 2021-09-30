const palindromes = (string) => {
    string = string.replace(/\W/g, '');
    string = string.toLowerCase();
    let stringReverse = string.split('').reverse().join('')
    return string === stringReverse
}


// Do not edit below this line
module.exports = palindromes;
