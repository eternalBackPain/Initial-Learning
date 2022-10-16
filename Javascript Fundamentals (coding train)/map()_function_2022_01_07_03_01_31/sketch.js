let r = 255
let g = 255
let b = 255

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(r, g, b);
  r = map(mouseX, 0, windowWidth, 0, 255)
  g = map(mouseX, 0, windowWidth, 0, 255)
  b = 0
  
}