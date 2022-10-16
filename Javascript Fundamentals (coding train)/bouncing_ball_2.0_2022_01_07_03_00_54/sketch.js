let ball = {
  x: 200,
  y: 200,
  xspeedinitial: [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5],
  yspeedinitial: [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5],
  xspeed: 4,
  yspeed: -3
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  display();
  move();
  bounce();
  
}

function display() {
  rectMode(CENTER)
  rect(ball.x, ball.y, 40, 20)
  strokeWeight(5)
}

function move() {
  ball.x = ball.x + ball.xspeed
  ball.y = ball.y + ball.yspeed
}

function bounce() {
  if(ball.x > width || ball.x <= 0) {
    ball.xspeed = ball.xspeed * -1
    print("HIT!!!")
  }
  if(ball.y > height || ball.y <= 0) {
    ball.yspeed = ball.yspeed * -1
    print("HIT!!!!!!!!")
  }
}