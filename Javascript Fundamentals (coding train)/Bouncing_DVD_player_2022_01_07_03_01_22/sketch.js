let x = 100
let y = 0
let speedX = 5
let speedY = 5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  rectMode(CENTER)
  rect(x, y, 75, 50)
  
  x = x + speedX
  y = y + speedY
  
  if (x > 400 || x < 0) {
    speedX = speedX * -1
  }
  if (y > 400 || y < 0) {
    speedY = speedY * -1    
  }
  
// //button
//   circleMode(CENTER)
//   circle(200, 200, 40)
//   if (mouseX > 220 && mouseX < 240 && mouseY > 220 && mouseY < 240) {
//     if (mouseIsPressed) {
//       background(0, 255, 0)
//     }
//     fill(255, 0, 0)
//   }
    
  
  // if (x > 400) {
  //   speed = -5
  //   print("HIT!!!!")
  // }
  // if (y > 400) {
  //   speed = -5
  //   print("HIT!!!!")
  // }
  // if (x < 0) {
  //   speed = 5
  //   print("HIT!!!!")
  // }
  // if (y < 0) {
  //   speed = 5
  //   print("HIT!!!!")
  // }
  
  
//MY OWN ATTEMPT
  // if (x == 200) {
  //   x = x - 1
  // } else {
  //   x = x + 1
  // }
  // if (y == 200) {
  //   y = y - 1
  // }
  // else {
  //   y = y + 1
  // }
  
  //looks like it hits the 200, 200 point then shivers inbetween 
  //x&y = 200 and x&y = 200-1
  
  
//   x = x + 1
//   y = y + 1
  
//   if (x == 400) {
//     x = x - 1
//   }
//   if (y == 400) {
//     y = y - 1
//   }
  
  
  
}