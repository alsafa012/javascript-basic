function reverseString(numbers){
     // for(let i= o; i< numbers.length; i++)
     let reverse = '';
     for(let i=numbers.length-1; i >= 0 ;i--){
          const element = numbers[i];
          reverse = reverse + element;
          console.log(element, reverse);
          
     }
     return reverse;
}
const values = 'i am a good boy';
const result = reverseString(values);
console.log(result);