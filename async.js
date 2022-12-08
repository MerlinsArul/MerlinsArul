let result = function (score) {
    return new Promise(function (resolve, reject) {
        if (score > 50)
            resolve("Superb! You have passed")
        else {
            reject("Oops ! , You have failed")
        }

    })
}
let grade = function (response) {
    return new Promise(function (resolve, reject) {
        resolve("Your grade is A." + response)
    })
}
async function calculate() {
    try {
        const response = await result(80)
        console.log("Result Received");
        const finalgrade = await grade(response)
        console.log(finalgrade);
    }
    catch (err) {
        console.log(err)
    }
}
calculate()