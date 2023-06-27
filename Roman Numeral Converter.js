function convertToRoman(num) {
    let arr = num.toString().split('').reverse().map((el, i) => {
      return el + '0'.repeat(i);
    }).reverse();
    let objRoman = {
      '1': 'I','4': 'IV','5': 'V','9': 'IX','10': 'X','40': 'XL','50': 'L','90': 'XC','100': 'C','400': 'CD','500': 'D','900': 'CM','1000': 'M'
    }
    function check(numb) {
      let roman = [];
      let lastKey = '';
      let count = 0;
      let m = objRoman['1000'];
      for(let key in objRoman){
        if(Number(key) === Number(numb)){
          roman.push(objRoman[key])
          break;
      } else if (Number(key) > Number(numb)){
          if(numb.length === 3){
            count = (numb - lastKey) / 100;
            roman.push(objRoman[lastKey], 'C'.repeat(count));
            break;
          } else if (numb.length === 2) {
             count = (numb - lastKey) / 10;
             roman.push(objRoman[lastKey], 'X'.repeat(count));
             break;
           } else if( numb.length === 1) {
             count = (numb - lastKey);
             roman.push(objRoman[lastKey], 'I'.repeat(count));
             break;
           }
      } else if (Number(numb) > 1000) {
        let hugeNum = Number(numb) / 1000;
        roman.push(m.repeat(hugeNum));
        break;
      }
        lastKey = key;
      }
      return roman;
    }
    let newArr = [];
    arr.forEach(el => newArr.push(check(el)));
    let flatArr = newArr.flat();
    flatArr = flatArr.filter(el => el).join('')
  
    return flatArr;
   
  }
  
  convertToRoman(765);

  //TESTS

//   convertToRoman(2) should return the string II.
// Passed:convertToRoman(3) should return the string III.
// Passed:convertToRoman(4) should return the string IV.
// Passed:convertToRoman(5) should return the string V.
// Passed:convertToRoman(9) should return the string IX.
// Passed:convertToRoman(12) should return the string XII.
// Passed:convertToRoman(16) should return the string XVI.
// Passed:convertToRoman(29) should return the string XXIX.
// Passed:convertToRoman(44) should return the string XLIV.
// Passed:convertToRoman(45) should return the string XLV.
  