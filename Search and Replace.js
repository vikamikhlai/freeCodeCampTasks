function myReplace(str, before, after) {
    let arr = str.split(' ');
    let afterWord = after.split('');
    let firstLetter = afterWord.shift();
    
    if(before[0] === before[0].toUpperCase()){
      afterWord.unshift(firstLetter.toUpperCase());
    } else {
      afterWord.unshift(firstLetter.toLowerCase());
    }
  
    arr.splice(arr.indexOf(before), 1, afterWord.join(''));
    return arr.join(' ');
  }

  //TESTS 

//   myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
// Passed:myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
// Passed:myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
// Passed:myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
// Passed:myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
// Passed:myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.