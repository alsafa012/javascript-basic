 function convert(hours) {
     const minutes = hours * 60;
     console.log(`${hours} hours is equal to ${minutes} minutes`);
     const seconds =  minutes*60;
     return seconds;
   }
   
   const hoursInput = 1; 
   const resultInMinutes = convert(hoursInput);
//    console.log("", resultInMinutes);
   console.log(`${hoursInput} hour is equal to ${resultInMinutes} seconds`);
   
  

/* 
function convert(hours) {
     const minutes = hours * 60;   
     const seconds =  minutes*60;
     return {minutes , seconds};
   }
   
   const hoursInput = 1;
   const { minutes, seconds } = convert(hoursInput);
   console.log(minutes);
   console.log(seconds);
    */
// console.log(`${hoursInput} hours is equal to ${minutes} minutes and ${seconds} seconds.`);