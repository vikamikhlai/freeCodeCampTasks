function diffArray(arr1, arr2) {
    let newArr = [];
    arr1.forEach(el => {
      if(!arr2.includes(el)){
        newArr.push(el)
      }
    })
    arr2.forEach(el => {
      if(!arr1.includes(el)){
        newArr.push(el)
      }
    })
    console.log(newArr)
    return newArr
  }

  //another solution:

const newArr = arr1.concat(arr2);
  let result = [];
  const unique = newArr.reduce((acc, cur) => {
  if (acc.hasOwnProperty(cur)) {
     delete acc[cur];
  } else {
    acc[cur] += 1;
  }
  return acc;
}, {})

for (let key in unique) {
  if (isNaN(+key)) {
    result.push(key)
  } else {
    result.push(+key)
  }
}
  return result;

  //TESTS

//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
// Passed:["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// Passed:["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
// Passed:["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
// Passed:["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
// Passed:["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
// Passed:["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
// Passed:[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// Passed:[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
// Passed:[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// Passed:[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
// Passed:[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// Passed:[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
// Passed:[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
// Passed:[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.