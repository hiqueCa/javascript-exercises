const ftoc = function(temp) {
  let roundedNumber = Math.round(((temp - 32) * 5/9) * 10) / 10;
  return roundedNumber;
};

const ctof = function(temp) {
  let roundedNumber = Math.round(((9/5 * temp) + 32) * 10) / 10;
  return roundedNumber;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
