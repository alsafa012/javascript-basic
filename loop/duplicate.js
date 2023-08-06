/* const names=['rj','ridoy','sharna','ridoy','sharna','rj','alsafa'];
function removeDuplicate(names){
     const unique =[];
     for( let i=0; i<names.length; i++){
          const name = names[i];
          // console.log(name);
          if(unique.includes(name)==false){
               unique.push(name);
          }         
     }
     return unique;
}
const res = removeDuplicate(names);
console.log(res); */
// console.log(names.length)
// write  a program 01:show output 1 to 50 02:if the number is divisible by 3 then instead of the number show 'three-sum' 03:if the number is divisible by 5 then instead of the number show 'five' 03:if the number is divisible by both 3 and 5 then instead of the number show 'vatari'


function showOutput1() {
     for (let num = 1; num <= 10; num++) {
         if (num % 3 === 0 && num % 5 === 0) {
             console.log('vataritui');
         } else if (num % 3 === 0) {
             console.log('three-sumoj');
         } else if (num % 5 === 0) {
             console.log('fivsxdde');
         } else {
          console.log(num);
          console.log(typeof num);
         }
     }
 } 
  showOutput1();
 function showOutput() {
     for (let num = 1; num <= 10; num++) {
         let output = '';
 
         if (num % 3 === 0 && num % 5 === 0) {
             output = 'vatari';
         } else if (num % 3 === 0) {
             output = 'three-sum';
         } else if (num % 5 === 0) {
             output = 'five';
         } else {
             output = num;
         }
 
         console.log(output);
         console.log(typeof output);
     }
 }
 showOutput();
 
 