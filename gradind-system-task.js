// grading system
var myself =  85;
var dot =  66;
var lumba =  95;
var zisan =  56;
var rockey =  40;

function getGrade(point) {
     if (point >= 80) {
       return "A";
     } else if (point >= 60) {
       return "B";
     } else if (point >= 50) {
       return "C";
     } else if (point >= 40) {
       return "D";
     } else {
       return "F";
     }
   }

var myself = getGrade(myself);
var dot =  getGrade(dot);
var lumba =  getGrade(lumba);
var zisan =  getGrade(zisan);
var rockey =  getGrade(rockey);

console.log('myTotalscore: ', myself);
console.log(dot);
console.log(lumba);
console.log(zisan);
console.log(rockey);


// Function to determine grade
// function getGrade(score) {
//      if (score >= 80) {
//        return "A";
//      } else if (score >= 60) {
//        return "B";
//      } else if (score >= 50) {
//        return "C";
//      } else if (score >= 40) {
//        return "D";
//      } else {
//        return "F";
//      }
//    }
   
//    // Given total scores
//    const yourScore = 85;
//    const tomScore = 95;
//    const janeScore = 95;
//    const peterScore = 56;
//    const johnScore = 40;
//    function getGrade(point) {
//      if (point >= 80) {
//        return "A";
//      } else if (point >= 60) {
//        return "B";
//      } else if (point >= 50) {
//        return "C";
//      } else if (point >= 40) {
//        return "D";
//      } else {
//        return "F";
//      }
//    }
   
//    // Get grades for you and your friends
//    const yourGrade = getGrade(yourScore);
//    const tomGrade = getGrade(tomScore);
//    const janeGrade = getGrade(janeScore);
//    const peterGrade = getGrade(peterScore);
//    const johnGrade = getGrade(johnScore);
   
//    // Print the grades
//    console.log("Your grade:", yourGrade);
//    console.log("Tom's grade:", tomGrade);
//    console.log("Jane's grade:", janeGrade);
//    console.log("Peter's grade:", peterGrade);
//    console.log("John's grade:", johnGrade);