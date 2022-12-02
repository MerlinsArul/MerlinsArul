const v = [12, 34, 56, 67, 49]
let i = 0;
do {
    console.log(Math.sqrt(v[i]))
    i++;
}
while (i < v.length - 1);
console.log("The loop executed before verification")