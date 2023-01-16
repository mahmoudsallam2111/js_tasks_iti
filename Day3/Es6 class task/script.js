class Shape {
  constructor(dim1 = 0, dim2 = 0) {
    this.dim1 = dim1;
    this.dim2 = dim2;
  }

  tostring() {
    console.log(`the dim1 = ${this.dim1}, dim2 = ${this.dim2}`);
  }
}

class Rectangle extends Shape {
  constructor(dim1, dim2) {
    super(dim1, dim2);
  }

  rectArea() {
    return this.dim1 * this.dim2;
  }
  rectperimeter() {
    return (this.dim1 + this.dim2) * 2;
  }
  tostring() {
    console.log(
      `the dim1 = ${this.dim1}, dim2 = ${
        this.dim2
      } , area = ${this.rectArea()} , perimeter = ${this.rectperimeter()}`
    );
  }
}

class Circle extends Shape {
  constructor(dim1) {
    super(dim1);
  }

  circleArea() {
    return Math.PI * (this.dim1 * this.dim1);
  }
  circleperimeter() {
    return 2 * Math.PI * this.dim1;
  }

  tostring() {
    console.log(
      `the dim1 = ${this.dim1},
      } , area = ${this.circleArea()} , perimeter = ${this.circleperimeter()} `
    );
  }
}
var counter = 0;
class suquare extends Shape {
  constructor(dim1) {
    counter++;
    super(dim1);
  }

  squareArea() {
    return this.dim1 * this.dim1;
  }

  squareperimeter() {
    return (this.dim1 + this.dim2) * 2;
  }

  tostring() {
    console.log(
      `the dim1 = ${this.dim1},
      } , area = ${this.squareArea()} , perimeter = ${this.squareperimeter()} `
    );
  }
}

var r1 = new Rectangle(3, 2);
r1.tostring();

var c1 = new Circle(2);
console.log(c1.circleArea());

var s1 = new suquare(2);
var s2 = new suquare(2);
var s3 = new suquare(2);
console.log(`the number pf instance is : ${counter}`);

/*===========================================================================*/

function Shape(width, height) {
  this.width = width;
  this.height = height;
}
Shape.prototype.Area = function () {
  return this.width * this.height;
};
Shape.prototype.Premiter = function () {
  return 2 * (this.width + this.height);
};
Shape.prototype.toString = function () {
  return `Width: ${this.width} || Height: ${
    this.height
  } || Area: ${this.Area()} Preimter: ${this.Premiter()}`;
};

function Rectangle(width, height) {
  Shape.call(this, width, height);
  Rectangle.instanceCounter++; /// start counter
}
Rectangle.instanceCounter = 0; /// initialize counter
Rectangle.prototype = Object.create(Shape.prototype);

function Square(para) {
  Shape.call(this, para, para);
}
Square.prototype = Object.create(Shape.prototype);

var r1 = new Rectangle(5, 6);
console.log(r1.Area());
console.log(`the number of instance is ${Rectangle.instanceCounter}`);
