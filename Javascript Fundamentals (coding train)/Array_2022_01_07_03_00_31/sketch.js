let words = ["cool", "athletic", "sexy", "amazing"]
let index = 0

let circleSize = [20, 40, 15, 10]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  textSize(32)
  text(words[index], 12, 200)
  
  for (var i = 0; i < 4; i++) {
    ellipse(i*100+100, 200, circleSize[i], circleSize[i]);
  }
  
}

function mousePressed() {
  index = index + 1
  
  if (index == words.length) {
    index = 0
  }
}