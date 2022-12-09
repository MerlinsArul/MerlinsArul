// Callback
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
function createperson(person, callback) {
    setTimeout(() => {
        persons.push(person);
        callback();
    }, 2000)
}
createperson({ name: 'Pavi', intro: 'I am Pavi' }, getpersons)