const add = function (val1, val2) {
  return val1 + val2;
};

const subtract = function (val1, val2) {
  return val1 - val2;
};

const sum = function (args) {
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];

  }
  return parseInt(total);
};

const multiply = function (arr) {
  var total = 1;
  for (i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return parseInt(total);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (val) {
  var aux = val;

  if (val == 0) {
    return 1;
  }

  for (i = 1; i < val; i++) {
    aux *= i;
  }
  
  return aux;
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
