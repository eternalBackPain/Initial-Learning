let shape1;
let shape2;

function setup() {
  createCanvas(400, 400);
  shape1 = new Shapes(150, 200, random(10, 50));
  shape2 = new Shapes(200, 200, random(10, 50));
  }


function draw() {
    background(0);  
  if (shape1.intersects(shape2)) {
    background(0, 255, 100)
  }
  shape1.show();
  shape1.move();
  shape2.show();
  shape2.move();
  

  }