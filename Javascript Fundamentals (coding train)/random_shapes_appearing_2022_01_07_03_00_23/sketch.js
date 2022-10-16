let shapes = [];

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  let r = random(10, 50)
  let s = new Shapes(mouseX, mouseY, r);
  shapes.push(s);
}

function draw() {
  background(0);
  
  for (i = 0; i < shapes.length; i++) {
    shapes[i].show();
    shapes[i].move();
    //shapes.spin();
  }
  

}

