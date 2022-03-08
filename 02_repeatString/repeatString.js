const repeatString = function(string, repetitions) {
  let expectedString = '';

  if (negativeRepetitions(repetitions)) {
    return 'ERROR'
  };

  for (let i = 0; i < repetitions; i++) {
    expectedString += string;
  };

  return expectedString;
};

function negativeRepetitions(repetitions) {
  return repetitions < 0;
};

// Do not edit below this line
module.exports = repeatString;
