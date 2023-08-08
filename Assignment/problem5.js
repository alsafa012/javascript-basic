function canPay(changeArray, totalDue) {
     // const changeArray=[4,2,5];
     // const totalDue = 10;
     // for(i= 0; i<changeArray.length;i++){
     //      if(!changeArray[i]){
     //           return "Invaliddd";
     //      }
     // }
     if (changeArray.length === 0) {
          return "invalid...Empty Array";
     } else {
          let myTotalMoney = 0;
          for (let i = 0; i < changeArray.length; i++) {
               myTotalMoney = myTotalMoney + changeArray[i];
          }
          if (myTotalMoney >= totalDue) {
               return true;
          }
          return false;
     }
}
// console.log(canPay());
console.log(canPay([4, 2, 5], 10));
console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 1, 5], 10));
console.log(canPay([0, 1, 5], 10));
console.log(canPay([], 10));
// console.log(canPay(changeArray, totalDue));
