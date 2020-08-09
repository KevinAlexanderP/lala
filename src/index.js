class Rectangle {
  constructor(_width, _heigth, _color) {
    this.width = _width;
    this.heigth = _heigth;
    this.color = _color;
    this.numOfRequestsForArea = 0;
  }
  getArea() {
    this.numOfRequestsForArea++;
    return this.width * this.heigth;
  }
  setArea() {
    this.width = Math.sqrt(area);
    this.heigth = this.width;
  }
  printDescription() {
    console.log(
      `I am a rectangle of ${this.width} and ${this.heigth} and I am ${this.color} `
    );
  }
}

let Rectangle1 = new Rectangle(2, 4, "blue");
let Rectangle2 = new Rectangle();
console.log(Rectangle1.getArea());
console.log(Rectangle1.printDescription());

// Class
// Obj
// Instances
//static methods
class Square {
  constructor(_width) {
    this.width = _width;
    this.heigth = _width;
  }
  static equals(a, b) {
    return a.width * a.heigth === b.width * b.heigth;
  }
}

let square1 = new Square(8);
console.log(square1);
