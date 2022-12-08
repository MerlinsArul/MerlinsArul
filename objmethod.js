// assign
let person ={
    name : "merlins",
    Age : 21,
    marks :[90,95,98]
}
let me = Object.assign({},person);
console.log(me);
// create
let student={
    name :"merlins",
    isStudent:"yes",
    myname:function(){
        console.log(`My name is ${this.name} and My course is ${this.course}.Am I Student? ${this.isStudent} `);
    }
};
let myself = Object.create(student);
myself.course ="Angular";
myself.isStudent = "no";
myself.myname();
// defineproperty
Object.defineProperty(student,'name',{value:"sherlin"})
console.log(student);
// entries
console.log(Object.entries(person));
// freeze
Object.freeze(person);
person.name ="sherlin";
console.log(person.name);
//from enries
let famous =[['Thanjavur','BigTemple'],['Trichy','RockFort']]
console.log(Object.fromEntries(famous));
//getowndescriptor
console.log(Object.getOwnPropertyDescriptor(person,'name'));
//getowndscriptor
console.log(Object.getOwnPropertyDescriptors(person));
//getownproperty
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(Object.getPrototypeOf(student));
console.log(Object.hasOwn(person,'name'));
console.log(Object.keys(person));
var obj = {};
console.log(Object.isExtensible(obj));
console.log(Object.isFrozen(person));
Object.seal(person);
person.Age=22;
console.log(person.Age);
delete person.Age;
console.log(person.toString());
console.log(Object.values(person));
