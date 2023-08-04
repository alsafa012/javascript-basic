// simple way to calculate
/* function leapYear(year) {
     let leap = [];
     for (var i = 0; i < year.length; i++) {
          let elements = year[i];
          if(elements % 4 === 0) {
               leap.push(elements)

     }
}
return leap;
}
let list=[2020,2024,2000,2023];
let result = leapYear(list)
console.log(result);
 */

// print both leapYear && notLeapYear this return are different from
/* function leapYear(year) {
     let leapOk = [];
     let notLeapOk = [];
     for (var i = 0; i < year.length; i++) {
          let elements = year[i];
          if (elements % 4 === 0 && (elements % 100 !== 0 || elements % 400 === 0)) {
           leapOk.push(elements);
          } else {
               notLeapOk.push(elements);
          }
      }
return {leapOk,notLeapOk};
}
let list=[2020,2024,2000,2023];
console.log("list of array",list);
// let result = leapYear(list)
// console.log(result);
const {leapOk,notLeapOk} = leapYear(list);
console.log("This years are",leapOk);
console.log("This years are not",notLeapOk);
 */


// print both leapYear && notLeapYear this return are different from from charGpt
function leapYear(years) {
     let leap = [];
     let nonLeap = [];
 
     for (var i = 0; i < years.length; i++) {
         let elements = years[i];
         if (elements % 4 === 0 && (elements % 100 !== 0 || elements % 400 === 0)) {
             leap.push(elements);
         } else {
             nonLeap.push(elements);
         }
     }
 
     return {
         leapYears: leap,
         nonLeapYears: nonLeap
     };
     
 }
 
 let list = [2020, 2024, 2000, 2023];
 let result = leapYear(list);
 console.log("Leap Years:", result.leapYears);
 console.log("Non-Leap Years:", result.nonLeapYears);
 