function addTogether() {
    const [first, second] = arguments;
    if(typeof first !== "number") return undefined;
    if(arguments.length === 1) return (second) => addTogether(first, second);
    if(typeof second !== "number") return undefined;
    return first + second;
  
  }
  
  addTogether(2,3);

  //TESTS

//   addTogether(2, 3) should return 5.
// Passed:addTogether(23, 30) should return 53.
// Passed:addTogether(5)(7) should return 12.
// Passed:addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
// Passed:addTogether(2, "3") should return undefined.
// Passed:addTogether(2)([3]) should return undefined.
// Passed:addTogether("2", 3) should return undefined.
// Passed:addTogether(5, undefined) should return undefined.