// // Check which number is the largest
// let largestNum;
// const num1=5;
// const num2=6;
// const num3=8;

//  if (num1>=num2 && num1 >= num3) {
//   console.log( "The largest number is: " ,num1);
// } else if (num2 >= num1 && num2 >= num3) {
//   // largestNum=num2;
//   console.log( "The largest number is: " ,num2);
// } else {
//   // largestNum=num3;
//   console.log( "The largest number is: ",num3);
// }

// // Print the largest number
// console.log("The largest number is: " + largestNum); 



// simple wa
const jim=84;
const dela=50;
rj = 100;
if(jim > dela && jim > rj ){
     console.log("The largest number jim")

}else if( dela >rj && dela >jim){
     console.log("The largest number dela",{dela})
}else{
     console.log("rj beat everyone",{rj});
}






// write a function that will take 3 numbers witt return the max number using math.max statement.
function maxNumber(a,b,c){
   return{
     max:Math.max(a,b,c),
     min:Math.min(a,b,c)
}

}
const result = maxNumber(6,8,9)
console.log("Minimum value is:",result.max,"&&  Minimum value is:",result.min);



// write a js function that will take 3 numbers witt return the max number using if-else statement.

function maxIfElse(a,b,c,d){
     if(a >=b && a <=c && a >=d){
          return a;
     } else if (b>=a && b >=c && b >=d){
          return b;
     
     }
     else if (c>=a && c >=b && c >=d){
          return c}
          else{
          return d;
     }
}
const result1 = maxIfElse(9, 15, 63,54656);
console.log(result1);
const minimum = Math.min(9, 15, 63,54656);
console.log({minimum});

// another way to do this using array ...dot 3ta dici karon amar value 3ta

const values = [9,15,63,555]
const result2 = maxIfElse(...values)
console.log(result2);
const minimum1 = Math.min(...values); // Using spread operator to pass the array elements as individual arguments
console.log({minimum});