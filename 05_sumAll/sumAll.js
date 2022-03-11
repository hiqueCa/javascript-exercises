const sumAll = function(number1, number2) {
  let sum = 0;

  if (anyArgumentIsNotANumber(arguments) || anyNumberIsNegative(arguments)) {
    return 'ERROR';
  }

  let crescOrderedNumbers = reorderNumberArgumentsCrescently(arguments)

  for (let i = crescOrderedNumbers[0]; i <= crescOrderedNumbers[arguments.length - 1]; i++) {
    sum += i;
  };

  return sum;
};

function anyNumberIsNegative(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      return true;
    };
  };
};

function anyArgumentIsNotANumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof(numbers[i]) != 'number') {
      return true;
    };
  };
};

function reorderNumberArgumentsCrescently(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let aux = 0;
    if (numbers[i] > numbers[i+1]) {
      aux = numbers[i+1]
      numbers[i+1] = numbers[i]
      numbers[i] = aux
    };
  };

  return numbers
}

// Do not edit below this line
module.exports = sumAll;
