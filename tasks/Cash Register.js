// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
    let copyCid = [...cid];
    let sum = 0;
    let change = cash - price;
    const currency = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.10,
    'NICKEL': 0.05,
    'PENNY': 0.01
    }
    let arr = [];
  
    cid.forEach(el => sum += el[1])
    if (+sum.toFixed(2) < change) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if(+sum.toFixed(2) === change) {
      return {status: "CLOSED", change: cid};
    } else {
      cid.reverse();
      let result = check(change);
      if(result.length === 0){
        return {status: "INSUFFICIENT_FUNDS", change: []}
      } else {
        return  {status: "OPEN", change: result};
      }
    }
  
    function check(numb){
      for(let key in currency){
        if(numb > currency[key]){
          let index = 0;
          let max = 0;
          copyCid.find((el, i) => {
            if(el[0] === key && el[1] !== 0) {
              max = el[1];
              index = i;
            } 
          })
          if(Number.isInteger(numb / currency[key])) {
            if(max >= numb){
              arr.push([key, numb]);
              break;
            } else {
              return [];
            }
          } else {
            let integer = (Math.floor(numb / currency[key]) * currency[key]);
            if(max !== 0){
              if(max > integer){
                copyCid[index][1] = max - integer;
                arr.push([key, integer]);
                check(+(numb - integer).toFixed(2));
                break;
              } else {
                copyCid[index][1] = 0;
                arr.push([key, max]);
                check(+(numb - max).toFixed(2));
                break;
              }
            }
          }
        }
      }
      return arr;
    }
    
  }
//   checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

//   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// Passed:checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// Passed:checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// Passed:checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// Passed:checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// Passed:checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
  