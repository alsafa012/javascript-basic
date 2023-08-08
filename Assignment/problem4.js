/* function findAddress(obj) {
     const requiredProperties = ['street', 'house', 'society'];
 
     // Check and replace missing properties with double underscores
     for (const prop of requiredProperties) {
         if (!(prop in obj)) {
             obj[prop] = '__';
         }
     }
 
     // Construct the output format
     const output = `${obj.street},${obj.house},${obj.society}`;
 
     return output;
 }
 
 // Test cases
 const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
 console.log(findAddress(input1)); // Output: 10,15A,Earth Perfect
 
 const input2 = { street: 10, society: "Earth Perfect" };
 console.log(findAddress(input2)); // Output: 10,__,Earth Perfect
 
 const input3 = { street: 10 };
 console.log(findAddress(input3)); // Output: 10,__,__
 
 
 const requiredProperties = [
     { name: 'street', value: '10' },
     { name: 'house', value: '15A' },
     { name: 'society', value: 'Earth Perfect' }
 ];
 
 requiredProperties[0].value = '20'; // Modifying the value of the 'street' property
 
 console.log(requiredProperties); // Outputs: [ { name: 'street', value: '20' }, { name: 'house', value: '15A' }, { name: 'society', value: 'Earth Perfect' } ]

 
 */











//  simple properties
// 





function findAddress(obj) {
     const addresses = [
         { street: 10, house: '15A', society: 'Earth Perfect' },
         { street: 10, society: 'Earth Perfect' },
         { street: 10 }
     ];
     const properties = ['street', 'house', 'society'];
     const output = [];
 
     for (const add of addresses) {
         const values = [];
 
         for (const property of properties) {
             if (add[property] !== undefined) {
                 values.push(add[property]);
             } else {
                 values.push('__');
             }
         }
 
         output.push(values.join(','));
     }
 
     return output;
 }
 
 
 const results = findAddress();
 
 // Print the results
 for (const result of results) {
     console.log(result);
 }
 
 function findAddress(obj) {
     const values = Object.values(obj);
     return values.join(',');
 }
 
 // Test case
 const address = { street: 10, house: '15A', society: 'Earth Perfect' };
 console.log(findAddress(address)); // Output: "10,15A,Earth Perfect"
 