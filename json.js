var a ={
	"name": "Merlins",
	"id": "10445",
	"role": ["JS", "Angular"],
	"age": 22,
	"doj": "10-08-2022",
	"married": false,
	"address": {
		"street": "32, Laham St.",
		"city": "Thanjavur",
		"country": "India"
	},
};
console.log(a.role[0]);
console.log(a.address["street"]);
var b = JSON.stringify(a);
console.log(b);
