const a = Symbol();
console.log(a);

const b = Symbol();
console.log(a === b);

const c = Symbol("Merlins")
console.log(c);

// Using For to make symbol equal
const x = Symbol.for("Symbol 1");
const y = Symbol.for("Symbol 1");
console.log(x===y);

// retrieve the variable
console.log(Symbol.keyFor(x));


//identify object properties
const name = Symbol("Person Name")
const person ={
    [name] :"Merlins",
    age:20,
    city:"Thanjavur"
}
person.name ="Sherlin";
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));