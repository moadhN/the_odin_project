const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function ([x, ...args], s = 0) {
  return x == undefined ?
    s
    : sum(args, s += x)
};

const multiply = function ([x, ...args], m = 1) {
  return x == undefined ?
    m
    : multiply(args, m *= x)
};

const power = function (a, b) {
  let result = 1
  while (b > 0) {
    console.log(a)
    result *= a;
    b--
  }
  return result
};

const factorial = function (a, fac = 1) {
  return a == 0 ?
    fac
    : factorial(a - 1, (fac * (a)))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
