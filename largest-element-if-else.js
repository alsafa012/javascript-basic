// Given numbers
// const num1 = 13;
// const num2 = 79;
// const num3 = 45;

// Check which number is the largest
// let largestNum;

/* if (num1>=num2 && num1 >= num3) {
  console.log( "The largest number is: " +num1);
} else if (num2 >= num1 && num2 >= num3) {
  // largestNum=num2;
  console.log( "The largest number is: " +num2);
} else {
  // largestNum=num3;
  console.log( "The largest number is: " +num3);
}

// Print the largest number
// console.log("The largest number is: " + largestNum); */





// Take input from the user
const n = parseInt(prompt("Enter a number:"));

// Check if the user entered a valid number
if (isNaN(n)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  console.log("Even numbers up to " + n + ":");
  
  // Loop to show all even numbers up to 'n'
  for (let num = 0; num <= n; num++) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}



