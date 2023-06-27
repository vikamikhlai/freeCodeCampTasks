function sumAll(arr) {
  let newArr = [];
  let result = 0;
  let min = Math.min(...arr);
  do {
    newArr.push(min);
    min += 1;
  } while (min <= Math.max(...arr));
  newArr.forEach(el => result += el);
  return result;
}
sumAll([1, 4]);

// sumAll([1, 4]) should return a number.
// Passed:sumAll([1, 4]) should return 10.
// Passed:sumAll([4, 1]) should return 10.
// Passed:sumAll([5, 10]) should return 45.
// Passed:sumAll([10, 5]) should return 45.