// object destructuring

const dress ={
     title :"saree",
     type :"silk",
     specification:"banaras",
     price:{
        start:10000,
        final:100000
     }
}
//var specification = dress.specification;
// we can also reassign key name
let{title,type,specification:special,price,price:{start,final},othertype="samurthika"} = dress;
console.log(title);
console.log(special);
console.log(price);
console.log(othertype);

// array destructing

const Food = ["Idly","Sambar","5",["Dosa","Chappathi","Poori"]]

let [name,sidish,rate,[a,b,c]] = Food;
console.log(a,b,c);
