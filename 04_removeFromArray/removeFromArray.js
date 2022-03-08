const removeFromArray = function(array) {
  for (let i = 1; i < arguments.length; i++) {
    let element = arguments[i];
    for (let j = 0; j < array.length; j++) {
      if (array[j] === element) {
        let subArrayBeforeElement = array.slice(0, j);
        let subArrayAfterElement = array.slice(j + 1, array.length);
        array = subArrayBeforeElement.concat(subArrayAfterElement);
        break;
      };
    };
  };

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
