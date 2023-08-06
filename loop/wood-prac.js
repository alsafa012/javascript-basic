function woodCalculator(chairQuality,tableQuality,bedQuality){
     const perChair = 3;
     const perTable = 10;
     const perBed = 50;
     const chair = chairQuality * perChair;
     const table = tableQuality * perTable;
     const bed = bedQuality * perBed;
     total = chair + table + bed;
     // console.log(chair,table,bed);
     return total;
}
const totalCost = woodCalculator(0,0,5);
console.log("Total Cost: ",totalCost);
