const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw");
  }
};

circle.draw();

// Factory Function
function createCircle(radius) {
  return {
    radius: radius,
    location: {
      x: 1,
      y: 1
    },
    draw: function() {
      console.log("draw");
    }
  };
}

const myCircle = createCircle(1);
myCircle.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const another = new Circle(1);
another.draw();
