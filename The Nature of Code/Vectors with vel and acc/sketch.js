//a vector has both a magnitude (distance) and a
// direction. The concept of a vector is just the arrow itself,
// regardless of where it is on the canvas - the idea is that 
// this arrow can exist anywhere with a magnitude and direction

let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 200)
}

function draw() {
  background(0);
  mover.update();
  mover.show();
}

//Another example which draws lines with cursor  
  // translate(width / 2, height / 2)
  // let pos = createVector(width / 2, height / 2);
  // let mouse = createVector(mouseX, mouseY);

  // let v = p5.Vector.sub(mouse, pos);
  // v.setMag(100);

//Making random lines from a point
  // v = p5.Vector.random2D(); //this is a static method
  // v.normalize()
  // v.mult(random(50, 100));