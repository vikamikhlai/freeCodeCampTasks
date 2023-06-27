function pairElement(str) {
    let arr = str.split('');
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'A') {
        newArr.push(['A','T']);
      } else if (arr[i] === 'T'){
        newArr.push(['T','A']);
      } else if (arr[i] === 'C'){
        newArr.push(['C','G']);
      } else if (arr[i] === 'G'){
        newArr.push(['G','C']);
      }
    }
    return newArr;
  }
  pairElement("GCG");

  //TESTS

//   Passed:pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// Passed:pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// Passed:pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].