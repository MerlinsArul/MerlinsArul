const name ="Merlins"
const nam = new Promise((resolve,reject)=>{
    if (name=="Merlins"){
        resolve("Yes your name is Merlins")
    }
    else{
        reject("You are not a Merlins")
    }
})
nam.then((message)=>{
    console.log("Hurray"+message)
}).catch((message)=>{
    console.log("Oops"+message);
})