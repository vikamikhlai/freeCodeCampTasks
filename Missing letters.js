function fearNotLetter(str) {
    let arrAbc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arrStr = str.split('');
    let index = arrAbc.indexOf(str[0]);
    let newArr = [];
    if(arrAbc.length === arrStr.length){
     return undefined;
    }
    newArr = arrAbc.splice(index);
    for(let i = 0; i < arrStr.length; i++){
      console.log(newArr[i], arrStr[i])
      if(newArr[i] !== arrStr[i]) {
        console.log(newArr[i])
        return newArr[i];
      }
    }
  }
  
  fearNotLetter("stvwx");

  //TESTS

//   fearNotLetter("abce") should return the string d.
// Passed:fearNotLetter("abcdefghjklmno") should return the string i.
// Passed:fearNotLetter("stvwx") should return the string u.
// Passed:fearNotLetter("bcdf") should return the string e.
// Passed:fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.