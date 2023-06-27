function dropElements(arr, func) {
    let num = arr.find(func);
    if(!num) {
      return [];
    } 
    let index = arr.indexOf(num);
    return arr.slice(index);
  }
  
  dropElements([1, 2, 3, 9, 2], function(n) {return n > 2; });

  //TESTS

//   dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// Passed:dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// Passed:dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// Passed:dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// Passed:dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// Passed:dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].