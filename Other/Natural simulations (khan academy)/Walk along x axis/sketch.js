let walkers = [];

class Walker {
  constructor(r, g, b) {
    this.x = 10
    this.y = height / 2
    this.r = r
    this.b = b
    this.g = g
  }
  display() {
    stroke(this.r, this.g, this.b)
    strokeWeight(4)
    point(this.x, this.y)
  }
  move() {
    this.x++;
    let dir = floor(random(2));
    if (dir === 0) {
      this.y = this.y + 5;
    }
    if (dir === 1) {
      this.y = this.y - 5;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (i = 0; i < 20; i++) {
    walkers[i] = new Walker(random(255), random(255), random(255));
  }
}

function draw() {
  stroke(255)
  strokeWeight(2);
  line(10, 0, 10, height);
  line(0, height / 2, width, height / 2)
  for (i = 0; i < 10; i++) {
    walkers[i].display();
    walkers[i].move();
  }
}