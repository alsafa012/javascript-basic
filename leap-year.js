 function leapYear(year){
     if((year % 4 ==0 && year % 100 !=0) || year % 400 != 0){
          return true;
     }
     else {
          return false;
     }
}
// console.log(leapYear(2022)); 

const leapYear1 = leapYear(2024)
console.log(leapYear1);
// const leapYear1 = 2000;
// console.log(leapYear(leapYear1));
// const yearToCheck = 2024; // Replace this with the year you want to check

// if (leapYear(yearToCheck)) {
//   console.log(`${yearToCheck} is a leap year.`);
// } else {
//   console.log(`${yearToCheck} is not a leap year.`);
// }
 



// function isLeapYear(year) {
//      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//        return true;
//      } else {
//        return false;
//      }
//    }
   
//    const yearToCheck = 2024; // Replace this with the year you want to check
   
//    if (isLeapYear(yearToCheck)) {
//      console.log(`${yearToCheck} is a leap year.`);
//    } else {
//      console.log(`${yearToCheck} is not a leap year.`);
//    }
   


