// const phones = [
     
//      { name: 'SIphone', camera: '12mp', storage:'18gb',price:136000, color:'white'},
//      { name: 'Samsung', camera: '64mp', storage:'256gb',price:36000, color:'black'},
//      { name: 'Xiaomi', camera: '108mp', storage:'12gb',price:96000, color:'black'},
//      { name: 'Nokia', camera: '32mp', storage:'120gb',price:46000, color:'pink'},
//      { name: 'poco', camera: '64mp', storage:'38gb',price:34500, color:'black'}
    
// ];
// function cheapestPhone(phones){

//      let cheapest =phones[0];
//      for(var i=0; i<phones.length; i++){
          
//           const phone = phones[i];
//           // console.log(phone);
//           if(phone.storage < cheapest.storage){
//                cheapest = phone;
//           }
//      }
//      return cheapest;

// }
// const myChoice = cheapestPhone(phones);
// console.log(myChoice);


const phones = [
     { name: 'SIphone', camera: '12mp', storage: '18gb', price: 136000, color: 'white' },
     { name: 'Samsung', camera: '64mp', storage: '256gb', price: 36000, color: 'black' },
     { name: 'Xiaomi', camera: '108mp', storage: '12gb', price: 96000, color: 'black' },
     { name: 'Nokia', camera: '32mp', storage: '120gb', price: 46000, color: 'pink' },
     { name: 'poco', camera: '64mp', storage: '38gb', price: 34500, color: 'black' }
];

function cheapestStoragePhone(phones) {
    let cheapest = phones[0];
    for (let i = 1; i < phones.length; i++) {
        const phone = phones[i];
        if (parseInt(phone.storage) < parseInt(cheapest.storage)) {
            cheapest =phone;
        }
    }
    return cheapest;
}

const cheapestStoragePhoneObj = cheapestStoragePhone(phones);
console.log(cheapestStoragePhoneObj);
