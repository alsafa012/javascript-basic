 function leapYear(year){
     if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
          return "Leap-year";
     }
     else {
          return "Not Leap-Year";
     }
}
// one option to print result
// console.log(leapYear(2022)); 

// 2nd option to print result
/* const leapYear1 = leapYear(2021);
console.log(leapYear1); */

// 3rd option to print result

// const leapYear1 = 2020;
// console.log(leapYear(leapYear1));

const yearToCheck = 2024; // Replace this with the year you want to check

if (leapYear(yearToCheck)) {
  console.log(`${yearToCheck} is a leap year.`);
} else {
  console.log(`${yearToCheck} is not a leap year.`);
}
 

   

// chat-gpt
/* function isLeapYear(year) {
     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
       return true;
     } else {
       return false;
     }
   }
   
   const yearToCheck = 2021; // Replace this with the year you want to check
   
   if (isLeapYear(yearToCheck)) {
     console.log(`${yearToCheck} is a leap year.`);
   } else {
     console.log(`${yearToCheck} is not a leap year.`);
   }
    */