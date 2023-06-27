function translatePigLatin(str) {
    let arr = str.split('');
    let vowel = ['a','i','e','o','u'];
    let count = 0;
    let newArr = [...arr];
  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < vowel.length; j++) {
  
        if(i === 0 && arr[i] === vowel[j]) {
          newArr.push('way');
          return newArr.join('');
        } 
        if(i >= 1 && arr[i] === vowel[j]) {
          let num = Math.floor(count / vowel.length);
          let con = newArr.splice(0, num);
          newArr.push(...con,'ay');
          return newArr.join('');
        }
        count++;
      }
    }
    if(count === arr.length * vowel.length) {
      newArr.push('ay');
    }
    return newArr.join('');
  };
  
  translatePigLatin(("schwartz"));

  //TESTS

//   translatePigLatin("california") should return the string aliforniacay.
// Passed:translatePigLatin("paragraphs") should return the string aragraphspay.
// Passed:translatePigLatin("glove") should return the string oveglay.
// Passed:translatePigLatin("algorithm") should return the string algorithmway.
// Passed:translatePigLatin("eight") should return the string eightway.
// Passed:Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
// Passed:Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.