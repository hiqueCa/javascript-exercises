const leapYears = function(year) {
  return (YearDivisable(year, 4) && !YearDivisable(year, 100) || YearDivisable(year, 400))
};

function YearDivisable(numerator, denominator) {
  return (numerator % denominator == 0);
};

// Do not edit below this line
module.exports = leapYears;
