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
  
  within(ppx, ppy) {
    if (dist(this.x, this.y, ppx, ppy) < this.r/2) {
      return true;
    } else {
      return false;
    }
    }
  
  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y)
    return(d < this.r/2 + other.r/2)
  }
  
      }