let pos;

function setup() {
  createCanvas(400, 400);
  pos = new Walker(width / 2, height / 2)
}

function draw() {
  background(0);
  pos.update()
  pos.show()
}