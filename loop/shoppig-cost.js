/* const shoppingCart = [
     {name:'belt',price:300},
     {name:'shirt',price:1000},
     {name:'pant',price:800},
     {name:'underwire',price:450},
     {name:'shoe',price:1200},
]
function totalCost(products){
     let sum=0;
     for(let i =0;i<products.length;i++){
          const product=products[i];
          sum = sum+product.price;
          // console.log(product)

     }
     return sum;

    
}
const expenses =totalCost(shoppingCart);
console.log(expenses); */



const shoppingCart = [
     {name:'belt',price:300,quantity:2},
     {name:'shirt',price:1000,quantity:5},
     {name:'pant',price:800,quantity:4},
     {name:'underwire',price:450,quantity:53},
     {name:'shoe',price:1200,quantity:5},
]
  function totalCost(products){
     let sum=0;
     for(let i =0;i<products.length;i++){
          const product=products[i];
          // const totalPrice = product.price*product.quantity;
          // sum = sum+totalPrice;
          sum = sum+(product.price*product.quantity);
          // console.log(product)

     }
     return sum;

    
}
const expenses =totalCost(shoppingCart);
console.log(expenses);
// console.log(expenses)