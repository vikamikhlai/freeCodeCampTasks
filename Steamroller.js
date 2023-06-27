function steamrollArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            newArr = newArr.concat(steamrollArray(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
}

steamrollArray([1, {}, [3, [[4]]]]);

//TESTS

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// Passed:steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// Passed:steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// Passed:steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Passed:Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
// Passed:Global variables should not be used.