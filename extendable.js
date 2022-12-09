// Default parameters

function add (a = 8,b=7){
    return a+b;
}
console.log(add()); 
console.log(add(2,3));

// default function

const add1 =()=> 20;

const calculate = function(x,y = x*add1()){
    return x+y;
}
const result = calculate (30);
console.log(result);

// rest parameter
 
function sumAll(...numbers){
    let i = 0;
    for(let num of numbers) 
    {
        i+=num;
    }
    return i;
}
console.log(sumAll(1,3,4,6,8,9,3,5));


// rest parameters with more arguments
function mycourse(name,batch,...course){
    console.log(`I am ${name} from ${batch} batch and I have learnes ${course}`);
    console.log(course[2]);
}
mycourse("Merlins",2022,"Java","HTML","CSS","JavaScript","Angular")

// spread operator using array

let a = ['2','3','24','45'];
let b =['43','34','78','76'];
let c =[...a ,...b]
console.log(c);

// spread operator as arguments
function sub (num1,num2){
    console.log(num1-num2);
}
let numbers =[8,4];
sub(...numbers);

// Template literals

// Multiple line using Backticks

var name =`My name is Merlins
I am 2022 passesout 
hi
Now I was in Practice of Angular`
console.log(name);

//using interpolation
var name = "Merlins";
var course ="Angular";
console.log(`I am ${name} and I am in Practice of ${course}`);
