/* function factorial(n) {
     if (n < 0) 
     {
       return "Factorial is not defined for negative numbers.";
     } 
     else if (n === 0 || n === 1)
     {
       return 1;
     }
     else 
     {
          
       let result = 1;
     //   for (let i = n; i >= 1; i--)
     for(let i = 1 ; i <= n ; i++)
        {
         result *= i;
         console.log(i,result);
       }
       return result;
     }
   }
   
   // Test the function
   const num = 5;
   const factorialResult = factorial(num);
//    console.log("FACT IS", factorialResult);
   console.log(`Factorial of ${num} is: ${factorialResult}`);
    */

// function factorial(n) {
//      if (n < 0) {
//           return "Factorial is not defined for negative numbers.";
//      } else if (n === 0 || n === 1) {
//           return 1;
//      } else {
//           let result = 1;
//           let i = 2;
//           while (i <= n) {
//                result *= i;
//                i++;
//           }
//           return result;
//      }
// }

// // Test the function
// const num = 5;
// const factorialResult = factorial(num);
// console.log(`Factorial of ${num} is: ${factorialResult}`);
function factorial(n) {
if(n<0){
     return "Factorial is not defined for negative numbers.";
}
else if(n ==0 || n==1){
     return 1;
}
else{
     let result = 1;
     let i = n;
     while(i>=1){
          result =result*i;
          console.log(i, {result});
          i--;
     }
     return result ;
}

}
const num=5;
const fact = factorial(num);
console.log(fact);

