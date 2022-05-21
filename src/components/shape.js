
// declare class
class Shape {
    drawShape(radius, color){
    this.radius = radius;
    this.color = color;
    }
    calculateArea() {
        return `
      Radius: ${this.radius}
    `;
	}
    color(){
        return `
      Color: ${this.color}
    `;

    }

}

module.exports = user;
// export class using module.exports
