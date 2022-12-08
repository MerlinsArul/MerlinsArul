
let x =[
    ['Merlins', 101],
    ['Maha',102],
    ['Pavi',103]
]
// Accessing
console.log(x[0]);
console.log(x[1][0]);
// Add element
x.push(['sharmi',104])
console.log(x);
x[1].push('react');
console.log(x);
//pop method
console.log(x.pop());
console.log(x[1].pop());
x.forEach((name)=>{
    name.forEach((data)=>{
    console.log(data);
    })
})
console.log(x.splice([1][1]));
