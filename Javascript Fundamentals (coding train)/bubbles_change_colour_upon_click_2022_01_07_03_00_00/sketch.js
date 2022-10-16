let shapes = [];

function setup() {
  createCanvas(400, 400);
  for (i=0; i < 15; i++) {
    shapes[i] = new Shapes(random(width), random(height), random(10, 50));
  }
}

function mousePressed() {
  for (i = 0; i < shapes.length; i++) {
    shapes[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  
  for (i = 0; i < shapes.length; i++) {
    shapes[i].show();
    shapes[i].move();
    //shapes[i].highlight();
  }
  

}