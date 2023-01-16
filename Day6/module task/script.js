export class Shape {
  constructor(dim1 = 0, dim2 = 0) {
    this.dim1 = dim1;
    this.dim2 = dim2;
  }

  tostring() {
    console.log(`the dim1 = ${this.dim1}, dim2 = ${this.dim2}`);
  }
}

export class Rectangle extends Shape {
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

export class Circle extends Shape {
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
export var counter = 0;
export class suquare extends Shape {
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

export let x = "ali";

// var r1 = new Rectangle(3, 2);
// r1.tostring();

// var c1 = new Circle(2);
// console.log(c1.circleArea());

// var s1 = new suquare(2);
// var s2 = new suquare(2);
// var s3 = new suquare(2);
// console.log(`the number pf instance is : ${counter}`);
