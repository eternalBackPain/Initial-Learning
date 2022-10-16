class Shapes {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.red = 255
    this.green = 255
    this.blue = 255
  }
  
  show() {
    stroke(255)
    strokeWeight(4);
    fill(this.red, this.green, this.blue);
    ellipseMode(CENTER)
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
  
  clicked(px, py) {
    if (dist(this.x, this.y, px, py) < this.r/2) {
      print("CLICKED")
      this.red = this.red - 50
      this.blue = this.blue - 50
      this.green = this.green - 50
    }
  }
}