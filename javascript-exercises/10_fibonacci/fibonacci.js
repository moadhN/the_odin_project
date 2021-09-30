
const fibonacci1 = function (n) {
    if (n < 0) return 'OOPS'
    let i = 0, prev = 0, current = 1;
    while (i < n) {
        sum = current + prev
        prev = current
        current = sum
        i++
    }
    return prev
};



/* ------------------------------------------------------------------------------------------------------------ */
const fibonacci2 = function (n) {
    if (n < 0) return 'OOPS'
    let phi1 = Math.pow((1 + Math.sqrt(5)), n)
    let phi2 = Math.pow((1 - Math.sqrt(5)), n);
    let Denominator = phi1 - phi2;
    let numerator = Math.pow(2, n) * Math.sqrt(5)
    return parseInt(Denominator / numerator)
}




/* ------------------------------------------------------------------------------------------------------------ */
const fibonacci3 = function (n) {
    if (n < 0) return 'OOPS'
    if (n < 3) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
// Do not edit below this line
module.exports = fibonacci;
