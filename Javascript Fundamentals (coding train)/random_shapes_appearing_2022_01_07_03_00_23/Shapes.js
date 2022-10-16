class Shapes {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  show() {
    let square = rect(this.x, this.y, random(20, 40), this.r, this.r);
    let circle = ellipse(this.x, this.y, this.r, this.r);
    let rectangle = rect(this.x, this.y, this.r, this.r);
    let shapeArray = [square, circle, rectangle];
    //need something here to make each shape generate seperately

  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
}