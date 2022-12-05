var Fruits = {
    Fruit_name: "Apple",
    Price: 120,
    Place: "Kashmir",
    about: function () {
        console.log(`The fruit ${this.Fruit_name} in the place ${this.Place} is ${this.Price} per kg`);
    }
}
Fruits.about();
Fruits.Species = "Peach";
console.log(Fruits);
// objects using constructor
function Course(name, fees, duration) {
    this.name = name;
    this.fees = fees;
    this.duration = duration;
    this.about = function () {
        console.log(`The course ${this.name} for ${this.duration} days cost ${this.fees}`);
    }
}
var Javascript = new Course("JavaScript", 1500, 30);
Javascript.about();
var Angular = new Course("Angular", 2000, 30);
Angular.about();