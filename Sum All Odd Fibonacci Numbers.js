function sumFibs(num) {
    let arr = [0, 1];
    let sum = 0;
    for(let i = 0; i <= num; i++){
      arr.push(arr[i] + arr[i + 1]);
    }
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 1 && arr[i] <= num) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  sumFibs(4);

  //TESTS

//   sumFibs(1) should return a number.
// Passed:sumFibs(1000) should return 1785.
// Passed:sumFibs(4000000) should return 4613732.
// Passed:sumFibs(4) should return 5.
// Passed:sumFibs(75024) should return 60696.
// Passed:sumFibs(75025) should return 135721.