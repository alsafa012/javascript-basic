function reverseString(numbers){
     // for(let i= o; i< numbers.length; i++)
     let reverse = '';
     for(let i=numbers.length-1; i >= 0 ;i--){
          const element = numbers[i];
          reverse = reverse + element;
          // console.log(element, reverse);
          
     }
     return reverse;
}
const values = 'i am a good boy';
const result = reverseString(values);
// console.log({result});


function reverseWord(str){
     const words = str.split(' ');
     const result =[];
     for (let i =words.length-1; i >= 0;i--){
          const element = words[i];
          result.push(element);
     }
     console.log(result);
     const reversed = result.join(' ');
     return reversed;
}
const myString = "My name is Ridoy";
// reverseWord(myString);
console.log(reverseWord(myString));