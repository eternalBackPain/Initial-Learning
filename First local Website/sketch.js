function setup() {
  createCanvas(windowWidth, windowHeight);
  createElement('h2', '...and here it is');
}

let x = 25

function draw() {
  background(220);
  ellipse(width / 2, height / 2, x, x)

}

function mousePressed() {
  createP('This circle just doubled in size!')
  console.log('text worked')
  x = x * 2
}