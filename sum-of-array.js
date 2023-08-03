//  function sumOfAnArray(number){
//      let sum = 0;
//      for( i=0;i<number.length;i++){
//           const index = i;
//           const element = number[index];
//           sum += element;
//           // sum=sum+element;
//           console.log( {index},{element},{sum} );
          
//      }
//      return sum;
// }                                                                
// const myNumbers = [12,36,59,748,253,69,245];
// sumOfAnArray(myNumbers);
// console.log(myNumbers);



/* // sum of even numbers of an array
function sumOfAnArray(numbers) {
    let sum = 0;
     for( i=0; i<numbers.length; i++){
          const index = i;
          const element = numbers[index];
          sum=sum+element;
          // console.log({index},{element},{sum});

     }
     return sum;
}
function getOddNumbers(numbers) {
     const oddNumbers = [];
     for(let i=0; i<numbers.length; i++){
          const index = i;
          const element = numbers[index];
          if(element % 2 !==0){
               console.log({index},{element});
               oddNumbers.push(element);

          }
     }
     return  oddNumbers;

}
const myNumbers = [12,36,59,748,253,69,245];
const OddNumbers = getOddNumbers(myNumbers);
console.log(OddNumbers);
const odd = sumOfAnArray(OddNumbers);
console.log(odd);
// console.log(sumOfAnArray(OddNumbers));
 */















// sum of both even and odd numbers of an array
function sumOfAnArray(numbers) {
     let sum = 0;
     for (let i = 0; i < numbers.length; i++) {
       const element = numbers[i];
       sum += element;
     }
     return sum;
   }
   
   function getEvenAndOddNumbers(numbers) {
     const evenNumbers = [];
     const oddNumbers = [];
     for (let i = 0; i < numbers.length; i++) {
       const element = numbers[i];
       if (element % 2 === 0) {
          console.log(element);
         evenNumbers.push(element);
       } else {
          
         oddNumbers.push(element);
         
       }
       
       
     }
     return { evenNumbers, oddNumbers };
   }
   
   const myNumbers = [12, 36, 59, 748, 253, 69, 245];
   const { evenNumbers, oddNumbers } = getEvenAndOddNumbers(myNumbers);
    /* const evenNumbers = getEvenAndOddNumbers(myNumbers);
    const oddNumbers = getEvenAndOddNumbers(myNumbers);
    */
   console.log("Even Numbers:", evenNumbers);
   console.log("Odd Numbers:", oddNumbers);
   
   const evenSum = sumOfAnArray(evenNumbers);
   const oddSum = sumOfAnArray(oddNumbers);
   
   console.log("Sum of Even Numbers:", evenSum);
   console.log("Sum of Odd Numbers:", oddSum);
   








