function convertHTML(str) {
    let arr = str.split('');
    let obj = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&apos;'
    }
    for(let i = 0; i < arr.length; i++){
      for(let key in obj){
        if(arr[i] === key){
          arr.splice(i, 1, obj[key]);
        }
      }
    }
    return arr.join('');
  }
  
  convertHTML('Stuff in "quotation marks"');

  //TESTS

//   convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
// Passed:convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
// Passed:convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
// Passed:convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
// Passed:convertHTML("Schindler's List") should return the string Schindler&apos;s List.
// Passed:convertHTML("<>") should return the string &lt;&gt;.
// Passed:convertHTML("abc") should return the string abc.