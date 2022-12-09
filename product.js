 let quantity = 30;

const product =(name,price)=>{
    console.log(name,price);
}
 const sale = (quantity,price)=>{
    console.log(quantity*price);
}

//named export
export {quantity,sale};
// default export
export default product;