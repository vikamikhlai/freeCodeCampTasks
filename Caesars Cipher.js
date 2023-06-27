// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
    const code = 13;
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const arr = str.split('');
    let result = [];
  
    for(let i = 0; i < arr.length; i++){
      let index = alphabet.findIndex(el => el === arr[i]);
      if(index === -1) {
        result.push(arr[i]);
      } else {
        if((alphabet.length - index) > code) {
          let newIndex = alphabet[index + code];
          result.push(newIndex);
        } else {
          let firstPartAlphabet = alphabet.slice(index);
          let secondPartAphabet = alphabet.slice(0, index);
          let newAlphabet = [...firstPartAlphabet, ...secondPartAphabet]
          result.push(newAlphabet[code]);
        }
      }
    }
    return result.join('');
  }
  
  rot13("SERR PBQR PNZC");

//   rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// Passed:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// Passed:rot13("SERR YBIR?") should decode to the string FREE LOVE?
// Passed:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.