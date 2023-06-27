function uniteUnique(arr) {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++){
      for (let j = 0; j < arguments[i].length; j++) {
        newArr.push(arguments[i][j])
      }
    }
    let result = [...new Set(newArr)];
    return result;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  //TETSTS

//   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// Passed:uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// Passed:uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// Passed:uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
// Passed:uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].