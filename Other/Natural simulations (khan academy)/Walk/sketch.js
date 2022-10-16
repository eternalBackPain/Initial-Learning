let walker;
let Walker = function (x, y) {
  this.x = x;
  this.y = y;
}

Walker.prototype.display = function () {
  stroke(255);
  strokeWeight(4);
  point(this.x, this.y);
}

Walker.prototype.move = function () {
  let direction = floor(random(4));
  if (direction === 0) {
    this.x = this.x + 1;
  } else if (direction === 1) {
    this.x = this.x - 1
  } else if (direction === 2) {
    this.y = this.y + 1
  } else if (direction === 3) {
    this.y = this.y - 1
  }
}

function setup() {
  createCanvas(400, 400);
  background(0);
  walker = new Walker(width / 2, height / 2);
}

function draw() {
  walker.display();
  walker.move();
}