const persons = [
    { name: 'Merlins', intro: 'I am Merlins' },
    { name: 'Maha', intro: 'I am Maha' }
];
function getpersons() {
    setTimeout(() => {
        let output = '';
        persons.forEach((person, index) => {
            output += `<li>${person.name}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createperson(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            persons.push(person);
            const error = true;
            if (!error) {
                resolve();
            } else {
                reject('Error:Something went wrong')
            }
        }, 2000);
    })
}
createperson({ name: 'Pavi', intro: 'My name is Pavi' })
    .then(getpersons)
    .catch(err=>console.log(err));