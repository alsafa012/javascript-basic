let first = 5;
let second = 8;
console.log(first, second);
// 1st Way 
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// 2nd----> destructuring
[first, second]=[second, first]
console.log(first, second);

