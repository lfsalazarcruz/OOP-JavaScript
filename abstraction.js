function Circle(radius) {
  let color = "red";

  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  // To hide this property from other obj instances, we set it as a variable
  let defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function(factor) {
    //...
  };

  // To make this function private / exclusive to this obj you can also set it up as a variable
  let computeOptimumLocation = function(factor) {
    //...
  };

  this.draw = function() {
    let x, y;

    computeOptimumLocation(1);

    console.log("draw");
  };
}

const circle = new Circle(10);
circle.draw();
