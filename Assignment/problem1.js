

function cubeNumber(number) {
     if(typeof number ==='number' && number >= 0){
          // return number ** 3;
          return Math.pow(number,3);
     }else{
          return "Invalid.Please enter a positive number"
     }
}
console.log(cubeNumber(3))
console.log(cubeNumber(0))
console.log(typeof cubeNumber(-4))
console.log(typeof cubeNumber('12vatari'))