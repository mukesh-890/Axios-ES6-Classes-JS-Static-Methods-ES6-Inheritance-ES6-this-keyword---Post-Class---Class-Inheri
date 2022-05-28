// import using require
const calculateArea = require("calculateArea");
const fs  = require("fs");
// declare class
class Circle extends drawShape {
    calculateArea(radius) {
	console.log("Area is" + 3.14 * radius * radius);
    }
    color() {
	console.log("Red");
    }	
}
module.exports = {
Circle,
}
// export class using module.exports
