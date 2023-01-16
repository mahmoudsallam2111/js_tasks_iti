// fn constructor shapes
function Shapes() {
  this.display = function () {
    console.log("hello from base class");
  };
}

// fn constructor
function Rectangle(_width, _height) {
  this.width = _width || 0;
  this.height = _height || 0;
  Rectangle.instanceCount++; /// staic proerty
}

//// fn to calc area
Rectangle.prototype.area = function () {
  console.log("area =" + this.width * this.height);
};
//// fn to calculate perimeter
Rectangle.prototype.perimeter = function () {
  console.log("perimeter =" + (this.width + this.height) * 2);
};

//// fn to override tostring method
Rectangle.prototype.Tostring = function () {
  console.log(
    "width =" + this.width,
    "height =" + this.width,
    "area =" + this.width * this.height,
    "perimeter =" + (this.width + this.height) * 2
  );
};

Rectangle.instanceCount = 0; /// intiation

var rect1 = new Rectangle(2, 2);
var rect2 = new Rectangle(5, 5);
var rect3 = new Rectangle(2, 4);
rect1.Tostring();

console.log("the number of instance is =" + Rectangle.instanceCount);

//inheritance from shape
// var baseshape = new Shapes();
// Rectangle.prototype = baseshape;
// var rect1 = new Rectangle(2, 2);
// rect1.display();
