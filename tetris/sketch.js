//Tetris

let row0 = []

function setup() {
  createCanvas(700, 700);
    for (i = 0; i < width / 10; i++) {
      row0[i] = new Square(i * width / 10, height - width / 10, width / 20);
    }
  }

function draw() {
  background(0);
  for (i = 0; i < width / 10; i++) {
    row0[i].display();
  }
}