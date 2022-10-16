let shapes = [];

function setup() {
  createCanvas(400, 400);

  for (i = 0; i < 10; i++) {
    shapes[i] = new Shapes(random(width), random(height), random(10, 50));
  }
}

function draw() {
  background(0);
  for (i = 0; i < shapes.length; i++) {
    let overlapping = false;
    if (overlapping) {
      background(0, 255, 100);
    } else {
      background(0);
    }
    shapes[i].show();
    shapes[i].move();
    for (j = 0; j < shapes.length; j++) {
      if (shapes[i] !== shapes[j] && shapes[i].intersects(shapes[j])) {
        overlapping = true;
    //THIS ISNT WORKING FOR SOME REASON
      }
    }
  }
}
