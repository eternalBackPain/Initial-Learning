let offsetX = 0;
let offsetY = 20

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

    for (x = 0; x <= width; x = x + 50) {
      for (y = 0; y <= height; y += 50) {
        ellipse(x + offsetX, y + offsetY, 20, 20);
        fill(random(255), random(255), random(255));
        frameRate(5);
    }
    
    offsetX = offsetX + 1
    offsetY = offsetY + 1

  }

//while loop
  // let x = 0;
  // while (x <= width) {
  //   ellipse(x, 200, 20, 20);
  //   x = x + 50;
  // }
}
