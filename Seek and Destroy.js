function destroyer(arr) {
    let newArr = [];
    for(let i = 1; i < arguments.length; i++){
       newArr.push(arguments[i]);
    }
    let result = arr.filter(el => !newArr.includes(el))
    return result;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  //TESTS

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// Passed:destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// Passed:destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// Passed:destroyer([2, 3, 2, 3], 2, 3) should return [].
// Passed:destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// Passed:destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].