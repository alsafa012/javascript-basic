
//simple way
/* function isEven(number){
     if (number <= 0) 
     {
          // console.log("number is nonexistent");
          return 'invalidNumber';
     }
     else if(number % 2 == 0){
          return true;
     }
     else{
          return false;
     }
}

console.log(isEven(-20)); //function er moddhe call korlam....
console.log(isEven(9665)); //function er moddhe call korlam.... */

//   another way

/* function isEven(number){
     if (number <= 0){
          return "'Invalid'please enter a positive number"
     }
     if (number % 2 ==0 )
     {
          return "Even Number";
     }
     else {
          return "odd number";
     }
}
const myNumber = isEven(0) ;
console.log(myNumber);
const myNumber1 = isEven(10) ;
console.log(myNumber1);
const myNumber2 = isEven(501) ;
console.log("number is", myNumber2); */

   



//-- Advance --take values from user .........................

const readline = require('readline');

function isEvenOrOdd(number) {
  if (number <= 0) {
    return "Invalid";
  } else if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (userInput) => {
  // Converting the user input to a number
  const number = Number(userInput);

  // Checking if the input is a valid number
  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    const result = isEvenOrOdd(number);
    console.log(`The number ${number} is ${result}.`);
  }

  rl.close();
}); 

/* part 01-> 
const readline = require('readline');
এই লাইনে, readline একটি মডিউল ইম্পোর্ট করা হয়েছে যেটি প্রোগ্রামে ইনপুট রিড করার জন্য ব্যবহার করা হয়। 
*/

/*part-2-->
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });
   এই লাইনে, readline মডিউলের createInterface মেথড কল করে, এবং এখানে process.stdin থেকে ইনপুট এবং process.stdout থেকে আউটপুট নির্ধারণ করে।
 */


  /* 
   ই লাইনে, rl.question ফাংশনটি কল করা হয়, যা ব্যবহারকারীকে একটি প্রশ্ন জিজ্ঞেস করে। এখানে ব্যবহারকারী ইনপুট প্রদান করতে পারে। ব্যবহারকারীর ইনপুটটি যেহেতু স্ট্রিং আকারে আসে, তাই Number(userInput) ব্যবহার করে সেটিকে সংখ্যা আকারে রূপান্তর করে। এরপর সংখ্যাটি একটি বৈধ সংখ্যা কিনা পরীক্ষা করে, যদি বৈধ না হয়, তাহলে "Invalid input. Please enter a valid number." প্রিন্ট করে। অন্যথায়, isEvenOrOdd ফাংশনকে কল করে এবং প্রিন্ট করে যে সংখ্যাটি কি বৈশিষ্ট্য রইলো। এরপর rl.close() কল করে প্রোগ্রামের সমাপ্তি করে। 
  */