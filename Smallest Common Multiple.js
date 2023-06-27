function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let newArr = [];
    for(let i = min; i <= max; i++){
      newArr.push(i);
    }
    function gcd(a, b) {
      console.log(a, b)
      return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
      return (a * b) / gcd(a, b);   
    }

    let multiple = min;
    newArr.forEach(function(n) {
      multiple = lcm(multiple, n);
    });

    return multiple;
}

smallestCommons([5, 1]);

//TESTS 

// smallestCommons([1, 5]) should return a number.
// Passed:smallestCommons([1, 5]) should return 60.
// Passed:smallestCommons([5, 1]) should return 60.
// Passed:smallestCommons([2, 10]) should return 2520.
// Passed:smallestCommons([1, 13]) should return 360360.
// Passed:smallestCommons([23, 18]) should return 6056820.